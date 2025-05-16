// hooks/useInsertReserveTour.ts
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";
import {
  fetchFavoritesByUserId,
  insertLikedTour,
  removeLikedTour,
} from "@/service/data-service";
import { FavoritesWithTour } from "@/types/types";

type InsertParams = {
  tourId: string;
  userId: string;
};
// insert liked tours in favorites table
export function useInsertLikedTour() {
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
// remove liked tours in favorites table
export function useRemoveLikedTour() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: InsertParams) =>
      removeLikedTour(params.tourId, params.userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });
}

// fetch liked tours by userId
export function useFetchLikedToursByUserId(
  userId: string | undefined,
  isInternational: boolean,
  options?: UseQueryOptions<FavoritesWithTour[], Error>
) {
  const isEnabled = !!userId && typeof isInternational === "boolean";
  return useQuery<FavoritesWithTour[], Error>({
    queryKey: ["favorites", userId, isInternational],
    queryFn: () => fetchFavoritesByUserId(userId!, isInternational),
    enabled: !!isEnabled,
    ...options,
  });
}
