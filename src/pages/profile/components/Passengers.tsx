import Button from "@/components/common/Button";
import PssengersForm from "./PssengersForm";
import Spinner from "@/components/common/spinner";
import { useFetchPassengersByUserId } from "@/hooks/ReactQuery/usePssengers";
import { useAuth } from "@/providers/AuthProvider";
import usePassengersModal from "@/store/usePassengersModal";
import AddPassengersModal from "./AddPassengersModal";
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
  if (!data) return <div>No data</div>;
  return (
    <div>
      <div className=" flex justify-between items-center">
        <h1 className="text-bodyLg ">مسافر های من</h1>
        <Button className="px-3 py-2" onClick={() => onOpen()}>
          افزودن مسافر
        </Button>
      </div>
      <PssengersForm />
      <AddPassengersModal />
    </div>
  );
}
