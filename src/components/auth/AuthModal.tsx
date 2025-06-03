import { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import useAuthModal from "../../store/useAuthModal";
import { supabase } from "@/lib/supabaseClient";

export default function AuthModal() {
  const { isOpen, onClose } = useAuthModal();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        onClose();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [onClose]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogOverlay className="bg-neutral-black opacity-70" />
      <DialogContent className="w-screen h-svh md:h-auto md:max-w-md">
        <DialogTitle className="text-center mt-3 text-primary">
          خوش اومدین
        </DialogTitle>
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
                fonts: {
                  bodyFontFamily: `"IranSans", sans-serif`,
                  buttonFontFamily: `"IranSans", sans-serif`,
                  inputFontFamily: `"IranSans", sans-serif`,
                  labelFontFamily: `"IranSans", sans-serif`,
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
                loading_button_label: "در حال ورود...",
                email_input_placeholder: "ایمیل خود را وارد کنید",
                password_input_placeholder: "رمز عبور خود را وارد کنید",
              },
              sign_up: {
                email_label: "ایمیل",
                password_label: "رمز عبور",
                button_label: "ثبت نام",
                email_input_placeholder: "ایمیل خود را وارد کنید",
                password_input_placeholder: "رمز عبور خود را وارد کنید",
              },
              forgotten_password: {
                button_label: "بازیابی رمز عبور",
                loading_button_label: "در حال ارسال لینک بازیابی...",
              },
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
