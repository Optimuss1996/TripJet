import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import usePassengersModal from "@/store/usePassengersModal";
import PssengersForm from "./PssengersForm";
import { useGetPassenger } from "@/hooks/ReactQuery/usePssengers";
import { useDeletePassengers } from "@/hooks/ReactQuery/usePssengers";
import { toast } from "sonner";

export default function PassengersModal() {
  const { isOpen, onClose, mode, passengerId } = usePassengersModal();
  const { data: passengerData, isLoading } = useGetPassenger(
    passengerId ?? "",
    {
      enabled: !!passengerId,
    }
  );
  const { mutate: deletePassenger } = useDeletePassengers();

  const handleDelete = () => {
    if (!passengerId) return;

    deletePassenger(passengerId, {
      onSuccess: () => {
        onClose();
        toast.success("مسافر با موفقیت حذف شد");
      },
      onError: () => {
        toast.error("خطا در حذف مسافر");
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-neutral-black opacity-70" />
      <DialogContent className="w-full md:max-w-[800px] md:h-auto h-svh">
        <DialogTitle className="text-center mt-3 text-primary">
          {mode === "create" ? "افزودن مسافر جدید" : "ویرایش اطلاعات مسافر"}
        </DialogTitle>

        {isLoading && mode === "edit" ? (
          <div className="flex justify-center items-center h-40">
            در حال بارگذاری...
          </div>
        ) : (
          <PssengersForm
            mode={mode}
            passengerData={mode === "edit" ? passengerData : undefined}
            onDelete={mode === "edit" ? handleDelete : undefined}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
