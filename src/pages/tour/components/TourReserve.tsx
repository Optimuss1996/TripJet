import Button from "@/components/common/Button";
import InputSelect from "./InputSelect";
import { Tours } from "@/types/types";
import { convertDollarToToman } from "@/utils/Commonconvert";
import { useInsertReserveTour } from "@/hooks/ReactQuery/useInsertBooking";
import { useAuth } from "@/providers/AuthProvider";
import { useState } from "react";
import useAuthModal from "@/store/useAuthModal";
import { toast } from "sonner";
import { FaCheck } from "react-icons/fa";
import { useRequireAuth } from "@/hooks/useRequireAuth";

interface TourProps {
  tour: Tours;
}

export default function TourReserve({ tour }: TourProps) {
  const { user } = useAuth();
  const modal = useAuthModal();
  const [numberOfPeople, setNumberOfPeople] = useState<number | null>(null);
  const { mutate, isPending, isSuccess } = useInsertReserveTour();
  const { isAuthenticated } = useRequireAuth();
  const total_price = (numberOfPeople as number) * tour.price;

  const handleReserveTour = () => {
    if (!isAuthenticated) {
      modal.onOpen();
      return;
    }

    if (!numberOfPeople) {
      toast.error("لطفا تعداد مسافران را انتخاب کنید");
      return;
    }

    mutate(
      {
        tourId: tour.id,
        userId: user?.id as string,
        numberOfPeople: numberOfPeople,
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
    <div className="flex flex-col gap-4 p-4 border border-neutral-400 rounded-lg">
      <div className="flex justify-between items-center">
        <span className="text-neutral-text-500">تعداد مسافران:</span>
        <InputSelect
          value={numberOfPeople}
          onChange={setNumberOfPeople}
          maxCapacity={tour.remaining_capacity}
        />
      </div>
      {numberOfPeople && (
        <div className="flex justify-between items-center">
          <span className="text-neutral-text-500">قیمت کل:</span>
          <div className="flex items-center gap-2">
            <span className="text-primary">
              {convertDollarToToman(total_price)}
            </span>
            <span className="text-neutral-text-500">تومان</span>
          </div>
        </div>
      )}
      <Button
        onClick={handleReserveTour}
        disabled={!numberOfPeople || isPending}
        className="w-full flex justify-center items-center gap-2"
      >
        {isPending ? (
          "در حال پردازش..."
        ) : isSuccess ? (
          <>
            <FaCheck />
            رزرو شد
          </>
        ) : (
          "رزرو تور"
        )}
      </Button>
    </div>
  );
}
