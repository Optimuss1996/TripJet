import { Tours } from "@/types/types";
import {
  convertDollarToToman,
  convertEnToFaNumbers,
  convertGregorianToPersianWithNumbers,
} from "@/utils/Commonconvert";
import { LucideCalendarCheck } from "lucide-react";
import { CiHeart } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";

interface TourProps {
  tour: Tours;
}

export default function CardDiscount({ tour }: TourProps) {
  return (
    <main className=" border border-neutral-400 rounded-lg bg-neutral-white h-[420px]">
      <section className=" relative p-[2px] h-3/5">
        <img
          src={tour.image}
          alt="photoTour"
          className=" rounded-md object-cover h-full w-full"
        />
        <span className=" absolute bg-primary-400 p-1 top-2 right-2 rounded-md cursor-pointer hover:opacity-60 transition duration-300">
          <CiHeart className=" text-primary-50" size={20} />
        </span>
        <div className=" absolute bottom-2 right-2 flex justify-start gap-2 text-labelMd">
          <div className=" flex gap-1 justify-start ">
            <div className="flex justify-between gap-1  px-3 py-1 bg-error-100 text-error-500 rounded-md">
              <img src="/tourCard/discount-shape.svg" alt="discount" />
              <p>{convertEnToFaNumbers(tour.discount)}٪ تخفیف</p>
            </div>
          </div>
          <div className=" flex gap-1 justify-start ">
            <div className="flex justify-between gap-1  px-3 py-1 bg-primary-400 font-light  text-primary-50 rounded-md">
              <img src="/tourCard/information.svg" alt="information" />
              <p>
                {convertEnToFaNumbers(tour.remaining_capacity)} نفر باقیمانده
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" flex flex-col gap-3 px-3 py-4 h-2/5 cursor-pointer">
        <p className="text-neutral-black font-medium">{tour.title}</p>

        <div className=" flex flex-col gap-2 text-neutral-text-500 text-labelMd">
          <div className=" flex justify-start items-center gap-2">
            <MdOutlineWatchLater className="text-neutral-text-500" size={20} />
            <p>
              {convertEnToFaNumbers(tour.duration_days + 1)} شب و{" "}
              {convertEnToFaNumbers(tour.duration_days)} روز
            </p>
          </div>
          <div className=" flex justify-start items-center gap-2">
            <LucideCalendarCheck className="text-neutral-text-500" size={18} />
            <p className=" flex gap-1">
              <span>
                {convertGregorianToPersianWithNumbers(tour.start_date).day}
              </span>
              <span>
                {
                  convertGregorianToPersianWithNumbers(tour.start_date)
                    .monthName
                }
              </span>
              <span>
                {convertGregorianToPersianWithNumbers(tour.start_date).year}
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-between text-neutral-text-500 text-labelMd mt-4">
          <p>شروع قیمت از </p>
          <div className=" flex justify-center items-center gap-2">
            <p className="text-primary">{convertDollarToToman(tour.price)}</p>
            <p className=" text-labelSm">تومان</p>
          </div>
        </div>
      </section>
    </main>
  );
}
