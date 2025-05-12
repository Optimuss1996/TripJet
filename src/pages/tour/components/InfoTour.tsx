import { Tours } from "@/types/types";
import { LucideCalendarCheck, LucideMountainSnow } from "lucide-react";
import { AiOutlineHome } from "react-icons/ai";
import { TbPizza } from "react-icons/tb";
import { FaPersonRunning } from "react-icons/fa6";
import {
  convertEnToFaNumbers,
  convertGregorianToPersianWithNumbers,
} from "@/utils/Commonconvert";
interface TourProps {
  tour: Tours;
}

export default function InfoTour({ tour }: TourProps) {
  const startDate = convertGregorianToPersianWithNumbers(tour.start_date);
  const endDate = convertGregorianToPersianWithNumbers(tour.end_date);
  //
  //
  const infoIcons = [
    {
      title: "تاریخ رفت",
      icon: <LucideCalendarCheck className="text-neutral-text-400" size={18} />,
    },
    {
      title: "تاریخ برگشت",
      icon: <LucideCalendarCheck className="text-neutral-text-400" size={18} />,
    },
    {
      title: " محل اقامت",
      icon: <AiOutlineHome className="text-neutral-text-400" size={18} />,
    },
    {
      title: " نوع تور",
      icon: <LucideMountainSnow className="text-neutral-text-400" size={18} />,
    },
    {
      title: "وعده های غذایی",
      icon: <TbPizza className="text-neutral-text-400" size={18} />,
    },
    {
      title: "درجه سختی",
      icon: <FaPersonRunning className="text-neutral-text-400" size={18} />,
    },
  ];

  return (
    <main className=" flex-1 flex flex-col gap-y-7  px-4 py-8 bg-neutral-white border border-neutral-text-200 rounded-lg ">
      <section>
        <h1 className=" text-bodyLg md:text-titleSm text-neutral-black mb-2">
          {tour.title}
        </h1>
        <div className=" flex items-center justify-start gap-x-2 text-labelLg text-neutral-text-400">
          <span>مدت سفر: </span>
          <span>
            {convertEnToFaNumbers(tour.duration_days - 1)} شب و{" "}
            {convertEnToFaNumbers(tour.duration_days)} روز
          </span>
        </div>
      </section>
      <div className="my-5 w-full h-px bg-neutral-text-200" />
      <section className="w-full flex  gap-14 text-labelLg ">
        <div className=" flex flex-col gap-4 ">
          {infoIcons.map((item) => (
            <div
              key={item.title}
              className=" flex items-center gap-2 text-neutral-text-400 text-labelMd md:text-labelLg"
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}
        </div>

        <div className=" flex flex-col gap-4 text-labelMd md:text-labelLg">
          <p className=" flex gap-2 text-neutral-text-500">
            <span>{startDate.day}</span>
            <span>{startDate.monthName}</span>
            <span>{startDate.year}</span>
          </p>
          <p className=" flex gap-2 text-neutral-text-500">
            <span>{endDate.day}</span>
            <span>{endDate.monthName}</span>
            <span>{endDate.year}</span>
          </p>
          <p className=" flex gap-2 text-neutral-text-500">
            <span>{convertEnToFaNumbers(tour.duration_days)}</span>
            <span>شب</span>
            <span>هتل</span>
            <span>{convertEnToFaNumbers(tour.hotel_rating)}</span>
            <span>ستاره</span>
          </p>
          <p className=" flex gap-2 text-neutral-text-500">{tour.tour_type}</p>
          <p className=" flex gap-2 text-neutral-text-500">
            <span>{convertEnToFaNumbers(tour.meal_count)}</span>
            <span>وعده غذایی</span>
          </p>

          <p className=" flex gap-2 text-neutral-text-500 ">
            <span>{convertEnToFaNumbers(tour.difficulty_level)}</span>
            <span>از ۵</span>
          </p>
        </div>
      </section>
    </main>
  );
}
