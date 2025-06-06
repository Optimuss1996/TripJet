import Button from "@/components/common/Button";
import MobileMenuSheet from "@/components/common/MobileMenuSheet";
import { useAuth } from "@/providers/AuthProvider";
import useAuthModal from "@/store/useAuthModal";
import { BiLogInCircle } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";

export default function Header() {
  const { onOpen, onClose } = useAuthModal();
  const { session } = useAuth();
  const navigate = useNavigate();
  async function handleLogOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error("خروج با خطا مواجه شد!");
      console.error(error.message);
      navigate("/");
    } else {
      toast.success(" خارج شدید ");
      onClose();
    }
  }

  function handleClick() {
    if (!session) {
      onOpen();
    } else {
      navigate("/profile/account");
    }
  }

  return (
    <>
      {/* mobile menu */}
      <div className=" flex md:hidden  justify-between items-center w-full  px-3 py-4 cursor-pointer">
        <div className=" flex justify-start items-center gap-1">
          <MobileMenuSheet />
          <Link
            to="/"
            className=" flex justify-center items-center gap-2 cursor-pointer"
          >
            <img src="/logo/Logo.svg" alt="TripJet" className="w-24 md:w-32" />
          </Link>
        </div>

        <div className=" flex justify-center items-center gap-5 text-labelSm">
          <Button
            onClick={session ? handleLogOut : onOpen}
            className=" px-2 py-1"
          >
            <div className=" flex justify-center items-center gap-1">
              <BiLogInCircle className=" text-primary-50 text-titleMd" />
              <span className=" text-neutral-white font-normal">
                {session ? "خروج" : " ورود "}
              </span>
            </div>
          </Button>
        </div>
      </div>

      <main className=" hidden md:flex w-full h-28 md:px-8 lg:px-14 py-3  text-neutral-white border-b border-x-neutral-text-400 border-opacity-70">
        <div className="  flex justify-between items-center w-full">
          <Link to="/" className=" flex justify-center items-center gap-2 ">
            <img src="/logo/Logo.svg" alt="TripJet" />
          </Link>
          <div className=" flex justify-center items-center gap-8 text-neutral-black ">
            <Link
              to={`/search?is_international=true`}
              className=" cursor-pointer"
            >
              تور های خارجی
            </Link>
            <Link
              to={`/search?is_international=false`}
              className=" cursor-pointer"
            >
              تور های داخلی
            </Link>
            <p onClick={handleClick} className=" cursor-pointer">
              حساب کاربری
            </p>
            <Link to={"/aboutUs"}>
              <p className="hidden lg:block cursor-pointer">درباره ما</p>
            </Link>
          </div>
          <div className=" flex justify-center items-center gap-5">
            <Button className="bg-neutral-white border border-primary px-4 py-2 hidden lg:block">
              <div className=" flex justify-center items-center gap-2">
                <span className=" text-primary font-normal">۰۲۱۳۳۴۸۹۸۰</span>
                <IoCallOutline className=" text-primary text-titleMd" />
              </div>
            </Button>
            <Button
              onClick={session ? handleLogOut : onOpen}
              className=" px-4 py-2"
            >
              <div className=" flex justify-center items-center gap-2">
                <BiLogInCircle className=" text-primary-50 text-titleMd" />
                <span className=" text-neutral-white font-normal">
                  {session ? "خارج شوید" : " ورود / ثبت نام"}
                </span>
              </div>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
