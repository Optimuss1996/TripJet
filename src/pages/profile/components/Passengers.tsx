import Button from "@/components/common/Button";
import Spinner from "@/components/common/spinner";
import { useFetchPassengersByUserId } from "@/hooks/ReactQuery/usePssengers";
import { useAuth } from "@/providers/AuthProvider";
import usePassengersModal from "@/store/usePassengersModal";
import { cn } from "@/lib/utils";
import {
  convertEnToFaNumbers,
  convertGregorianToPersianWithNumbers,
} from "@/utils/Commonconvert";
import { FaEdit } from "react-icons/fa";
import PassengersModal from "./PassengersModal";

export default function Passengers() {
  const { user } = useAuth();
  const { onOpen } = usePassengersModal();
  const userId = user?.id;

  const { data, isLoading, error } = useFetchPassengersByUserId(userId || "", {
    enabled: !!userId,
  });

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="flex justify-between items-center px-3">
        <h1 className="text-bodyLg">مسافر های من</h1>
        <Button
          className="px-2 py-1 md:px-3 md:py-2"
          onClick={() => onOpen("create")}
        >
          افزودن مسافر
        </Button>
      </div>

      <PassengersModal />

      <div className="mt-8 rounded-lg p-2 lg:p-4 bg-neutral-white">
        {/* Header */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 px-3 py-2 border-b border-neutral-200">
          <div className="w-[200px] text-labelMd font-medium text-neutral-text-500">
            نام و نام خانوادگی
          </div>
          <div className="hidden sm:block w-[200px] text-labelMd font-medium text-neutral-text-500">
            تاریخ تولد
          </div>
          <div className="w-[150px] text-labelMd font-medium text-neutral-text-500">
            کد ملی
          </div>
          <div className="w-[50px] text-labelMd font-medium text-neutral-text-500 text-center">
            عملیات
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-2 mt-2">
          {data?.map((passenger, index) => (
            <div
              key={passenger.id}
              className={cn(
                "grid grid-cols-3 sm:grid-cols-4 gap-4 px-3 py-2 items-center rounded-lg text-neutral-text-500 hover:bg-primary-300 transition-all duration-200",
                index % 2 === 0 ? "bg-primary-50" : "bg-primary-100"
              )}
            >
              <div className="w-[200px] text-labelMd truncate">
                {passenger.full_name}
              </div>
              <div className="hidden sm:block w-[200px] text-labelMd">
                <span>
                  {
                    convertGregorianToPersianWithNumbers(passenger.birth_date)
                      .day
                  }
                </span>
                <span className="mx-1">
                  {
                    convertGregorianToPersianWithNumbers(passenger.birth_date)
                      .monthName
                  }
                </span>
                <span>
                  {
                    convertGregorianToPersianWithNumbers(passenger.birth_date)
                      .year
                  }
                </span>
              </div>
              <div className="w-[150px] text-labelMd">
                {convertEnToFaNumbers(passenger.national_code)}
              </div>
              <div className="w-[50px] flex justify-center">
                <FaEdit
                  onClick={() => onOpen("edit", passenger.id)}
                  className="text-primary cursor-pointer hover:opacity-65 transition-all duration-200"
                  size={20}
                />
              </div>
            </div>
          ))}
        </div>

        {data?.length === 0 && (
          <div className="flex justify-center items-center py-8">
            <p>شما مسافری ندارید ...</p>
          </div>
        )}
      </div>
    </div>
  );
}
