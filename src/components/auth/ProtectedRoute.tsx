import { useAuth } from "@/providers/AuthProvider";
import { Navigate, useLocation } from "react-router";
import useAuthModal from "@/store/useAuthModal";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { session, loading } = useAuth();
  const location = useLocation();
  const { onOpen } = useAuthModal();

  if (loading) {
    return null;
  }

  if (!session) {
    // if the user is not logged in, and the user is not on the home page, open the modal
    const isRedirectingToHome =
      location.pathname === "/" && location.state?.redirected;

    if (!isRedirectingToHome) {
      onOpen();
    }

    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
