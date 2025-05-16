// hooks/useInsertReserveTour.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertLikedTour } from "@/service/data-service";

type InsertParams = {
  tourId: string;
  userId: string;
};

export function useInsertReserveTour() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: InsertParams) =>
      insertLikedTour(params.tourId, params.userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });
}
