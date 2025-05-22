import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Session, User as SupabaseAuthUser } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";

interface AuthContextType {
  session: Session | null;
  user: SupabaseAuthUser | null;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  loading: true,
  error: null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<SupabaseAuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const initializeSession = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      setError(error.message || "خطا در دریافت سشن");
    }

    if (data?.session) {
      setSession(data.session);
      setUser(data.session.user);
    } else {
      setSession(null);
      setUser(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    initializeSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session) {
          setSession(session);
          setUser(session.user);
        } else {
          setSession(null);
          setUser(null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, user, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
