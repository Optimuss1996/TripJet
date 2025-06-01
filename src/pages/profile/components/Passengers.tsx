import Button from "@/components/common/Button";
import Spinner from "@/components/common/spinner";
import { useFetchPassengersByUserId } from "@/hooks/ReactQuery/usePssengers";
import { useAuth } from "@/providers/AuthProvider";
import usePassengersModal from "@/store/usePassengersModal";
import AddPassengersModal from "./AddPassengersModal";
import { cn } from "@/lib/utils";
import {
  convertEnToFaNumbers,
  convertGregorianToPersianWithNumbers,
} from "@/utils/Commonconvert";
export default function Passengers() {
  const { user } = useAuth();
  const { onOpen } = usePassengersModal();
  const userId = user?.id;

  const { data, isLoading, error } = useFetchPassengersByUserId(userId || "", {
    enabled: !!userId,
  });

  console.log(data);

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className=" flex justify-between items-center">
        <h1 className="text-bodyLg ">مسافر های من</h1>
        <Button className="px-3 py-2" onClick={() => onOpen()}>
          افزودن مسافر
        </Button>
      </div>

      <AddPassengersModal />

      <div className=" flex flex-col gap-4 rounded-lg p-2 lg:p-4 bg-neutral-white">
        {data?.map((passenger, index) => (
          <div
            key={passenger.id}
            className={cn(
              "flex justify-between items-center p-2 rounded-lg text-neutral-text-500",
              index % 2 === 0 ? "bg-primary-50" : "bg-primary-100"
            )}
          >
            <h3>{passenger.full_name}</h3>
            <div className="flex gap-1">
              <span>
                {convertGregorianToPersianWithNumbers(passenger.birth_date).day}
              </span>
              <span>
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
            <p>{convertEnToFaNumbers(passenger.national_code)}</p>
          </div>
        ))}
      </div>

      {data?.length === 0 && (
        <div className="flex justify-center items-center h-screen">
          <p>شما مسافری ندارید ...</p>
        </div>
      )}
    </div>
  );
}
