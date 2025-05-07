import Button from "@/components/common/Button";
import {
  convertDollarToToman,
  convertEnToFaNumbers,
} from "@/utils/Commonconvert";
import { LucideCalendarCheck } from "lucide-react";
import { BsInfoCircleFill } from "react-icons/bs";
import { CiHeart, CiHome } from "react-icons/ci";
import { LiaMugHotSolid } from "react-icons/lia";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiUsers } from "react-icons/pi";

export default function HorizontalCard() {
  return (
    <main className="w-full h-[420px] lg:h-80 bg-neutral-white border border-neutral-400 rounded-lg ">
      <section className=" flex flex-col lg:flex-row justify-between items-center h-2/5 lg:h-2/3  lg:gap-1">
        {/* image */}
        <div className=" p-[2px] w-full lg:w-2/5 relative h-full">
          <img
            src="/amsterdam-2.webp"
            alt="tourPhoto"
            className=" rounded-lg object-cover h-full w-full"
          />
          <span className=" absolute bg-primary-400 p-1 top-2 right-2 rounded-md cursor-pointer hover:opacity-60 transition duration-300">
            <CiHeart className=" text-primary-50" size={20} />
          </span>
          <div className=" lg:hidden absolute bottom-2 right-2 flex justify-between items-center gap-2  px-3 py-1 bg-primary-50 text-primary font-light   rounded-md">
            <BsInfoCircleFill className=" text-primary " size={16} />
            <p className=" text-labelMd">
              {convertEnToFaNumbers(3)} نفر باقیمانده
            </p>
          </div>
        </div>

        <div className="w-full lg:w-auto flex flex-col lg:flex-row items-start justify-start  lg:items-center lg:justify-between gap-[2px] px-3 py-6 flex-1">
          <section className="w-full lg:w-auto px-3 flex flex-col gap-4">
            <p className="text-neutral-black text-bodyLg font-semibold">
              آمستردام
            </p>
            <div className="flex flex-col gap-2">
              <div className=" flex justify-start items-center gap-2">
                <LucideCalendarCheck
                  className="text-neutral-text-500"
                  size={18}
                />
                <span className="text-neutral-text-500 text-labelMd">
                  ۱۴۰۳/۰۵/۰۶
                </span>
              </div>
              <div className=" flex justify-start items-center gap-2">
                <MdOutlineWatchLater
                  className="text-neutral-text-500"
                  size={20}
                />
                <span className="text-neutral-text-500 text-labelMd">
                  ۹ شب و ۱۰ روز
                </span>
              </div>
              <div className=" flex justify-start items-center gap-2">
                <CiHome className=" text-neutral-text-500" size={20} />
                <span className="text-neutral-text-500 text-labelMd">
                  هتل ۴ ستاره
                </span>
              </div>
            </div>
            <div className=" hidden lg:flex justify-between items-center gap-2  px-3 py-1 bg-primary-50 text-primary font-light   rounded-md">
              <BsInfoCircleFill className=" text-primary " size={16} />
              <p className=" text-labelMd">
                {convertEnToFaNumbers(3)} نفر باقیمانده
              </p>
            </div>
            <div className=" lg:hidden flex justify-center gap-4 items-center  text-neutral-text-500 text-labelLg ">
              <p className=""> قیمت </p>
              <div className=" flex justify-center items-center gap-2 ">
                <p className="text-primary ">{convertDollarToToman(210)}</p>
                <p className=" text-labelSm">تومان</p>
              </div>
            </div>
            <div className="text-neutral-white">
              <Button className=" text-neutral-white w-full block lg:hidden rounded-lg px-3 py-2 text-labelSm xl:text-labelLg">
                مشاهده جزئیات و رزرو
              </Button>
            </div>
          </section>

          {/* this section used for screen bigger than lg  */}
          <section className=" hidden text-neutral-white lg:flex flex-col justify-end items-center gap-6 px-3">
            <div className="flex justify-between gap-3 text-neutral-text-500 text-labelMd xl:text-labelLg mt-4">
              <p className=""> قیمت </p>
              <div className=" flex justify-center items-center gap-2 ">
                <p className="text-primary ">{convertDollarToToman(210)}</p>
                <p className=" text-labelSm">تومان</p>
              </div>
            </div>
            <Button className=" rounded-lg px-3 py-2 text-labelSm xl:text-labelLg">
              مشاهده جزئیات و رزرو
            </Button>
          </section>
        </div>
      </section>

      <section className=" hidden lg:flex items-center gap-8  px-6 py-7">
        <div className=" flex-1 flex flex-col gap-1 justify-center items-start border-l border-neutral-400">
          <div className="flex justify-start gap-2 text-neutral-text-400">
            <CiHome className=" " size={20} />
            <p className="text-labelMd">اقامت</p>
          </div>
          <p className=" text-primary text-labelMd">۹ شب اقامت </p>
        </div>
        <div className=" flex-1 flex flex-col gap-1 justify-center items-start border-l border-neutral-400">
          <div className="flex justify-start gap-2 text-neutral-text-400">
            <LiaMugHotSolid className=" " size={20} />
            <p className="text-labelMd">وعده های غذایی</p>
          </div>
          <p className=" text-primary text-labelMd"> ۸ وعده صبحانه و ناهار</p>
        </div>
        <div
          className=" flex-1 flex flex-col gap-1 justify-center items-start
          border-l
          border-neutral-400 "
        >
          <div className="flex justify-start gap-2 text-neutral-text-400">
            <PiUsers className=" " size={20} />
            <p className="text-labelMd">ظرفیت تور</p>
          </div>
          <p className=" text-primary text-labelMd"> ۳۰ نفر</p>
        </div>
      </section>
    </main>
  );
}
