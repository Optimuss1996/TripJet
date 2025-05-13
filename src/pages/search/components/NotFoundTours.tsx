import Button from "@/components/common/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

export default function NotFoundTours() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 w-2/5 mx-auto">
      <img src="/otherImage/NotFoundTour.svg" alt="NotFound" className="" />
      <div className="w-full  flex flex-col gap-2 items-center justify-center text-bodyMd">
        <p>متاسفانه توری یافت نشد!</p>
        <Button>
          <Link
            to={"/"}
            className="w-full flex justify-center items-center gap-1 px-2 md:px-5 py-[6px] text-bodyMd"
          >
            <span className="text-bodyMd">بازگشت به صفحه اصلی</span>
            <FaArrowLeftLong />
          </Link>
        </Button>
      </div>
    </main>
  );
}
