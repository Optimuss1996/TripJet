import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Session, User as SupabaseAuthUser } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";
import { Users } from "@/types/types";

interface AuthContextType {
  session: Session | null;
  user: SupabaseAuthUser | null;
  userProfile: Users | null;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  userProfile: null,
  loading: true,
  error: null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<SupabaseAuthUser | null>(null);
  const [userProfile, setUserProfile] = useState<Users | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUserProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      setError("خطا در دریافت اطلاعات کاربر از جدول users");
      console.error(error);
      return null;
    }

    return data as Users;
  };

  useEffect(() => {
    const fetchSessionAndUser = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        setError("خطا در دریافت session");
        setLoading(false);
        return;
      }

      const currentSession = data?.session;
      setSession(currentSession);
      setUser(currentSession?.user ?? null);

      if (currentSession?.user) {
        const profile = await fetchUserProfile(currentSession.user.id);
        setUserProfile(profile);
      }

      setLoading(false);
    };

    fetchSessionAndUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          const profile = await fetchUserProfile(session.user.id);
          setUserProfile(profile);
        } else {
          setUserProfile(null);
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ session, user, userProfile, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
