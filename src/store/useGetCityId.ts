import { create } from "zustand";

interface TourState {
  cityId: string;
  setCityId: (city: string) => void;
}

export const useGetCityId = create<TourState>((set) => ({
  cityId: "",
  setCityId: (city) => set({ cityId: city }),
}));
