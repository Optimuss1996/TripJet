import { Tours } from "@/types/types";
import { convertDollarToToman } from "@/utils/Commonconvert";

interface ToursProps {
  tour: Tours;
}

export default function SimpleCard({ tour }: ToursProps) {
  return (
    <main className=" cursor-pointer hover:opacity-70 transition duration-300 flex items-center gap-2 lg:gap-4 h-36 p-[2px] rounded-lg border border-neutral-400 ">
      <div className="w-2/5  md:w-2/6 h-full">
        <img
          src={tour.image}
          alt="toursImage"
          className=" w-full object-cover rounded-lg h-full"
        />
      </div>
      <div className=" flex-1 px-2 lg:px-3 py-2 flex flex-col gap-8">
        <h4 className="text-bodySm   text-neutral-black truncate w-64 md:w-28 xl:w-52">
          {tour.title}
        </h4>
        <div className=" flex justify-between items-center gap-2 lg:gap-4">
          <span className="text-neutral-text-500 text-labelSm">
            شروع قیمت از
          </span>
          <div className=" flex justify-center items-center gap-1">
            <span className="text-primary text-bodyLg sm:text-labelSm lg:text-labelMd xl:text-bodyLg">
              {convertDollarToToman(tour.price)}
            </span>
            <span className="text-neutral-text-500 text-labelSm">تومان</span>
          </div>
        </div>
      </div>
    </main>
  );
}
