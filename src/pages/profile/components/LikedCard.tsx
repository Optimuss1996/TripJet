import Button from "@/components/common/Button";
import LikedButton from "@/components/common/LikedButton";
import { FavoritesWithTour } from "@/types/types";
import {
  convertDollarToToman,
  convertEnToFaNumbers,
  convertGregorianToPersianWithNumbers,
} from "@/utils/Commonconvert";
import { LucideCalendarCheck } from "lucide-react";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router";
interface TourProps {
  tour: FavoritesWithTour;
}

export default function LikedCard({ tour }: TourProps) {
  const startDate = convertGregorianToPersianWithNumbers(tour.tours.start_date);
  return (
    <main className=" border border-neutral-400 rounded-lg bg-neutral-white h-[420px]">
      <section className=" relative p-[2px] h-1/2">
        <img
          src={tour.tours.image}
          alt="photoTour"
          className=" rounded-md object-cover h-full w-full"
        />
        <LikedButton tour={tour.tours} />

        <div className=" absolute bottom-2 right-2 flex justify-start gap-2 text-labelMd">
          <div className=" flex gap-1 justify-start ">
            <div className="flex justify-between gap-1  px-3 py-1 bg-primary-400 font-light  text-primary-50 rounded-md">
              <img src="/tourCard/information.svg" alt="information" />
              <p>
                {convertEnToFaNumbers(tour.tours.remaining_capacity)} نفر
                باقیمانده
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" flex flex-col gap-3 px-3 py-4 h-2/5 cursor-pointer">
        <div className=" flex justify-start items-center gap-2">
          <p className="text-neutral-black font-medium">{tour.tours.title}</p>
        </div>

        <div className=" flex flex-col gap-2 text-neutral-text-500 text-labelMd">
          <div className=" flex justify-start items-center gap-2">
            <MdOutlineWatchLater className="text-neutral-text-500" size={20} />
            <p>
              {convertEnToFaNumbers(tour.tours.duration_days + 1)} شب و{" "}
              {convertEnToFaNumbers(tour.tours.duration_days)} روز
            </p>
          </div>
          <div className=" flex justify-start items-center gap-2">
            <LucideCalendarCheck className="text-neutral-text-500" size={18} />
            <p className=" flex gap-1">
              <span>{startDate.day}</span>
              <span>{startDate.monthName}</span>
              <span>{startDate.year}</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between text-neutral-text-500 text-labelMd mt-4">
          <p>شروع قیمت از </p>
          <div className=" flex justify-center items-center gap-2">
            <p className="text-primary">
              {convertDollarToToman(tour.tours.price)}
            </p>
            <p className=" text-labelSm">تومان</p>
          </div>
        </div>
        <Link
          to={`/tour/${tour.tours.name_slug}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className=" px-3 py-2 w-full"> مشاهده تور</Button>
        </Link>
      </section>
    </main>
  );
}
