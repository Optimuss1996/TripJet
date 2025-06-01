import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import usePassengersModal from "@/store/usePassengersModal";
import PssengersForm from "./PssengersForm";
export default function AddPassengersModal() {
  const { isOpen, onClose } = usePassengersModal();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogOverlay className="bg-neutral-black opacity-70" />
      <DialogContent className="w-full md:max-w-[800px] md:h-auto h-svh">
        <DialogTitle className="text-center mt-3 text-primary">
          مسافرین خود را اضافه کنید
        </DialogTitle>

        <PssengersForm />
      </DialogContent>
    </Dialog>
  );
}
