import { useAuth } from "@/providers/AuthProvider";
import useAuthModal from "@/store/useAuthModal";
import { useEffect } from "react";

export function useRequireAuth() {
  const { session, loading } = useAuth();
  const authModal = useAuthModal();

  useEffect(() => {
    if (!loading && !session) {
      authModal.onOpen();
    }
  }, [session, loading, authModal]);

  return {
    isAuthenticated: !!session,
    isLoading: loading,
    session,
  };
}
