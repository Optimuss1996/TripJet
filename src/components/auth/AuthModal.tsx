import { useEffect, useRef } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import useAuthModal from "../../store/useAuthModal";
import { useNavigate } from "react-router";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";

export default function AuthModal() {
  const { isOpen, onClose, wasLoggedOut, setWasLoggedOut } = useAuthModal();

  const navigate = useNavigate();
  const toastShown = useRef(false);

  useEffect(() => {
    if (wasLoggedOut) {
      toastShown.current = false;
      setWasLoggedOut(false);
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session && !toastShown.current) {
        toastShown.current = true;

        if (session.user?.aud === "authenticated") {
          toast.success("ورود با موفقیت انجام شد!");
        } else {
          toast.success("ثبت‌نام با موفقیت انجام شد!");
        }

        onClose();
        navigate("/");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [onClose, navigate, wasLoggedOut, setWasLoggedOut]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => (open ? null : onClose())}>
      <DialogOverlay className="bg-neutral-black opacity-70" />
      <DialogContent className="w-full h-screen md:h-auto md:max-w-md">
        <DialogTitle className="text-center mt-3">خوش اومدین</DialogTitle>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#005ff0",
                  brandAccent: "#005ff0",
                  inputBorder: "#005ff0",
                  inputText: "#0c0c0c",
                },
              },
            },
          }}
          providers={[]}
          localization={{
            variables: {
              sign_in: {
                email_label: "ایمیل",
                password_label: "رمز عبور",
                button_label: "ورود",
              },
              sign_up: {
                email_label: "ایمیل",
                password_label: "رمز عبور",
                button_label: "ثبت نام",
              },
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
