// hooks/useInsertReserveTour.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertReserveTour } from "@/service/data-service";

type InsertParams = {
  tourId: string;
  userId: string;
  numberOfPeople: number;
  total_price: number;
  status: "pending" | "confirmed" | "canceled";
};

export function useInsertReserveTour() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: InsertParams) =>
      insertReserveTour(
        params.tourId,
        params.userId,
        params.numberOfPeople,
        params.total_price,
        params.status
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tours"] });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });
}
