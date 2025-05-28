import { useAuth } from "@/providers/AuthProvider";
import { Navigate, useLocation } from "react-router";
import useAuthModal from "@/store/useAuthModal";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { session, loading } = useAuth();
  const location = useLocation();
  const authModal = useAuthModal();

  useEffect(() => {
    if (!loading && !session) {
      authModal.onOpen();
    }
  }, [session, loading, authModal]);

  if (loading) {
    return null; // یا یک کامپوننت Loading نمایش داده شود
  }

  if (!session) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
