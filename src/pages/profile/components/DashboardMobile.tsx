import Button from "@/components/common/Button";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";
import { IoExitOutline } from "react-icons/io5";
import ProfileModalMobile from "./ProfileModalMobile";
import { Outlet, useLocation } from "react-router";
import BackButton from "./BackButton";

export default function DashboardMobile() {
  const location = useLocation();
  const isRoute = location.pathname === "/profile";

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
            <Button className=" bg-error-100 text-error-500 px-6 py-4">
              <div className=" flex justify-center items-center gap-1">
                <IoExitOutline className=" text-error-500  " size={24} />
                <span>خرید از حساب کاربری</span>
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
