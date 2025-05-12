import Button from "@/components/common/Button";
import InputSelect from "./InputSelect";
import { Tours } from "@/types/types";
import { convertDollarToToman } from "@/utils/Commonconvert";

interface TourProps {
  tour: Tours;
}

export default function TourReserve({ tour }: TourProps) {
  return (
    <main
      className=" hidden md:block border border-neutral-text-200 rounded-lg bg-neutral-white w-64 lg:w-96
     px-4 py-3 "
    >
      <section className="flex items-start flex-col gap-4">
        <span className=" text-bodyMd lg:text-bodyLg">
          تعداد نفرات خود را وارد کنید.
        </span>
        <span className=" text-labelMd text-neutral-text-400">
          {tour.title}
        </span>
      </section>

      <section className=" flex flex-col gap-5 mt-8">
        <InputSelect remainingCapacity={tour.remaining_capacity} />
        <div className="flex items-center justify-center gap-4 w-full text-neutral-text-400 text-labelLg">
          <span className="text-neutral-black">قیمت برای هر مسافر</span>
          <span className="text-primary">
            {convertDollarToToman(tour.price)}
          </span>
          <span className="text-labelMd">تومان</span>
        </div>
        <Button className=" w-full px-3 py-2">رزرو تور</Button>
      </section>
    </main>
  );
}
