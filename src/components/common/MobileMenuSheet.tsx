import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetOverlay,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router";

export default function MobileMenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden">
          <RxHamburgerMenu className="text-primary" size={20} />
        </button>
      </SheetTrigger>
      <SheetOverlay className="bg-neutral-black opacity-50" />

      <SheetContent side="right" className=" w-52 md:hidden">
        {" "}
        <SheetHeader className="mt-6">
          <Link
            to="/"
            className=" flex justify-center items-center gap-2 cursor-pointer"
          >
            <img src="/logo/Logo.svg" alt="TripJet" className=" w-24" />
          </Link>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6 text-primary">
          <Link to="/" className=" pb-2 border-b border-b-primary-200">
            تورهای خارجی
          </Link>
          <Link to="/" className=" pb-2 border-b border-b-primary-200">
            تورهای داخلی
          </Link>
          <Link to="/" className=" pb-2 border-b border-b-primary-200">
            بیمه مسافرتی
          </Link>
          <Link to="/" className=" pb-2 border-b border-b-primary-200">
            درباره ما
          </Link>
          <Link to="/profile" className=" pb-2 border-b border-b-primary-200">
            حساب کاربری
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
