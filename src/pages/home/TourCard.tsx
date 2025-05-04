import { LucideCalendarCheck } from "lucide-react";
import { CiHeart } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";

export default function TourCard() {
  return (
    <main className=" border border-neutral-400 rounded-lg bg-neutral-white h-[420px]">
      <section className=" relative p-[2px] h-3/5">
        <img
          src="/amsterdam-2.webp"
          alt="photoTour"
          className=" rounded-md object-cover h-full w-full"
        />
        <span className=" absolute bg-primary-400 p-1 top-2 right-2 rounded-md cursor-pointer hover:opacity-85 transition duration-300">
          <CiHeart className=" text-primary-50" size={20} />
        </span>
        <div className=" absolute bottom-2 right-2 flex justify-start gap-2 text-labelMd">
          <div className=" flex gap-1 justify-start ">
            <div className="flex justify-between gap-1  px-3 py-1 bg-error-100 text-error-500 rounded-md">
              <img src="/tourCard/discount-shape.svg" alt="discount" />
              <p>۱۰٪ تخفیف</p>
            </div>
          </div>
          <div className=" flex gap-1 justify-start ">
            <div className="flex justify-between gap-1  px-3 py-1 bg-primary-400 font-light  text-primary-50 rounded-md">
              <img src="/tourCard/information.svg" alt="information" />
              <p>۳ نفر باقیمانده</p>
            </div>
          </div>
        </div>
      </section>
      <section className=" flex flex-col gap-3 px-3 py-4 h-2/5 cursor-pointer">
        <p className="text-neutral-black font-medium">
          تور جنوب فرانسه و اسپانیا
        </p>

        <div className=" flex flex-col gap-2 text-neutral-text-500 text-labelMd">
          <div className=" flex justify-start items-center gap-2">
            <MdOutlineWatchLater className="text-neutral-text-500" size={20} />
            <p>۸ شب و ۷ روز</p>
          </div>
          <div className=" flex justify-start items-center gap-2">
            <LucideCalendarCheck className="text-neutral-text-500" size={20} />
            <p>مهر و آبان ۱۴۰۳</p>
          </div>
        </div>

        <div className="flex justify-between text-neutral-text-500 text-labelMd mt-4">
          <p>شروع قیمت از </p>
          <div className=" flex justify-center items-center gap-2">
            <p>۱۱،۸۷۰،۹۰۰</p>
            <p className=" text-labelSm">تومان</p>
          </div>
        </div>
      </section>
    </main>
  );
}
