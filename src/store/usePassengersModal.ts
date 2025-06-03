import { create } from "zustand";

interface PassengersModalStore {
  isOpen: boolean;
  mode: "create" | "edit";
  passengerId: string | null;
  onOpen: (mode: "create" | "edit", passengerId?: string) => void;
  onClose: () => void;
}

const usePassengersModal = create<PassengersModalStore>((set) => ({
  isOpen: false,
  mode: "create",
  passengerId: null,
  onOpen: (mode, passengerId = undefined) =>
    set({ isOpen: true, mode, passengerId }),
  onClose: () => set({ isOpen: false, mode: "create", passengerId: null }),
}));

export default usePassengersModal;
