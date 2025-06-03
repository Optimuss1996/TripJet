import Button from "@/components/common/Button";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";
import { IoExitOutline } from "react-icons/io5";
import ProfileModalMobile from "./ProfileModalMobile";
import { Outlet, useLocation, useNavigate } from "react-router";
import BackButton from "./BackButton";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";

export default function DashboardMobile() {
  const location = useLocation();
  const isRoute = location.pathname === "/profile";

  const navigate = useNavigate();

  async function handleLogOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      toast.success("خارج شدید");

      navigate("/", { replace: true, state: { redirected: true } });
    } catch (error) {
      toast.error("خروج با خطا مواجه شد!");
      console.error(error);
    }
  }

  return (
    <div className=" p-3">
      {isRoute ? (
        <>
          <h1 className=" text-labelLg text-neutral-text-900 mb-5">
            حساب کاربری
          </h1>
          <div className=" flex flex-col gap-4">
            <UserProfile />
            <UserMenu />
            <Button
              onClick={handleLogOut}
              className=" bg-error-100 text-error-500 px-6 py-4"
            >
              <div className=" flex justify-center items-center gap-1">
                <IoExitOutline className=" text-error-500  " size={24} />
                <span>خروج از حساب کاربری</span>
              </div>
            </Button>
          </div>

          <ProfileModalMobile />
        </>
      ) : (
        <div>
          <BackButton to="/profile" />
          <Outlet />
        </div>
      )}
    </div>
  );
}
