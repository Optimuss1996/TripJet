import Button from "@/components/common/Button";
import MobileMenuSheet from "@/components/common/MobileMenuSheet";
import { BiLogInCircle } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router";

export default function Header() {
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
            <img
              src="/public/logo/Logo.svg"
              alt="TripJet"
              className="w-24 md:w-32"
            />
          </Link>
        </div>

        <div className=" flex justify-center items-center gap-5 text-labelSm">
          <Button className=" px-2 py-1">
            <div className=" flex justify-center items-center gap-1">
              <BiLogInCircle className=" text-primary-50 text-titleMd" />
              <span className=" text-neutral-white font-normal">ورود</span>
            </div>
          </Button>
        </div>
      </div>

      <main className=" hidden md:flex w-full h-28 md:px-8 lg:px-14 py-3  text-neutral-white">
        <div className="  flex justify-between items-center w-full">
          <Link to="/" className=" flex justify-center items-center gap-2">
            <img src="/public/logo/Logo.svg" alt="TripJet" />
          </Link>
          <div className=" flex justify-center items-center gap-8 text-neutral-black ">
            <p>تور های خارجی</p>
            <p>تور های داخلی</p>
            <p>بیمه مسافرتی</p>
            <p className="hidden lg:block">درباره ما</p>
          </div>
          <div className=" flex justify-center items-center gap-5">
            <Button className="bg-neutral-white border border-primary px-4 py-2 hidden lg:block">
              <div className=" flex justify-center items-center gap-2">
                <span className=" text-primary font-normal">۰۲۱۳۳۴۸۹۸۰</span>
                <IoCallOutline className=" text-primary text-titleMd" />
              </div>
            </Button>
            <Button className=" px-4 py-2">
              <div className=" flex justify-center items-center gap-2">
                <BiLogInCircle className=" text-primary-50 text-titleMd" />
                <span className=" text-neutral-white font-normal">
                  ورود / ثبت نام
                </span>
              </div>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
