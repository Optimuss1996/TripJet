import Button from "@/components/common/Button";
import InputSelect from "./InputSelect";
import { Tours } from "@/types/types";
import { convertDollarToToman } from "@/utils/Commonconvert";
import { useInsertReserveTour } from "@/hooks/useInsertBooking";
import { useAuth } from "@/providers/AuthProvider";
import { useState } from "react";
import useAuthModal from "@/store/useAuthModal";
import { toast } from "sonner";
import { FaCheck } from "react-icons/fa";

interface TourProps {
  tour: Tours;
}

export default function TourReserve({ tour }: TourProps) {
  const { session, user } = useAuth();
  const modal = useAuthModal();
  const [numberOfPeople, setNumberOfPeople] = useState<number | null>(null);
  const { mutate, isError, isPending, isSuccess } = useInsertReserveTour();
  const total_price = (numberOfPeople as number) * tour.price;

  const handleReserveTour = () => {
    if (!session || !user) {
      modal.onOpen();
      return;
    }
    mutate(
      {
        tourId: tour.id,
        userId: user?.id,
        numberOfPeople: numberOfPeople as number,
        total_price,
        status: "pending",
      },
      {
        onSuccess: () => {
          toast.success("رزرو با موفقیت انجام شد.");
        },
        onError: (error) => {
          if (
            error.message.includes(
              "duplicate key value violates unique constraint"
            )
          ) {
            toast.error("شما قبلاً این تور را رزرو کرده‌اید.");
          } else {
            toast.error("مشکلی در رزرو پیش آمد.");
          }
        },
      }
    );
  };

  return (
    <div>
      <div
        className=" hidden md:block border border-neutral-text-200 rounded-lg bg-neutral-white w-full sm:w-64 lg:w-96
     px-4 py-3  "
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
          <InputSelect
            numberOfPeople={numberOfPeople}
            setNumberOfPeople={setNumberOfPeople}
            remainingCapacity={tour.remaining_capacity}
          />
          <div className="flex items-center justify-center gap-4 w-full text-neutral-text-400 text-labelLg">
            <span className="text-neutral-black">قیمت برای هر مسافر</span>
            <span className="text-primary">
              {convertDollarToToman(tour.price)}
            </span>
            <span className="text-labelMd">تومان</span>
          </div>
          <Button
            disabled={!numberOfPeople || isPending}
            onClick={() => handleReserveTour()}
            className=" w-full px-3 py-2"
          >
            {isPending ? (
              "در حال رزرو تور..."
            ) : isSuccess ? (
              <div className="flex justify-center items-center gap-2">
                <FaCheck size={20} />
                رزرو با موفقیت انجام شد
              </div>
            ) : isError ? (
              "خطا در ثبت اطلاعات"
            ) : (
              "رزرو تور"
            )}
          </Button>
        </section>
      </div>
    </div>
  );
}
