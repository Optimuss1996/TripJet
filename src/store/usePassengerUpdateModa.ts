import { create } from "zustand";

interface PassengerUpdateModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePassengerUpdateModal = create<PassengerUpdateModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePassengerUpdateModal;
