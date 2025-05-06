import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Tours } from "@/types/types";
import {
  fetchToursByTopDiscounts,
  fetchToursByHighestPrice,
  fetchToursByTourType,
  fetchToursByMostPopular,
} from "@/service/data-service";
// hook for fetching tours by top discount
export function useFetchToursByTopDiscount(
  options?: UseQueryOptions<Tours[], Error>
) {
  return useQuery<Tours[], Error>({
    queryKey: ["tours", "top discount"],
    queryFn: fetchToursByTopDiscounts,
    ...options,
  });
}
// hook for fetching tours by highest price
export function useFetchToursByHighestPrice(
  options?: UseQueryOptions<Tours[], Error>
) {
  return useQuery<Tours[], Error>({
    queryKey: ["tours", "highestPrice"],
    queryFn: fetchToursByHighestPrice,

    ...options,
  });
}
// hook for fetching tours by tour type
export function useToursByTourType(
  tourType?: "nature" | "sports" | "cultural",
  options?: UseQueryOptions<Tours[], Error>
) {
  return useQuery<Tours[], Error>({
    queryKey: ["tours", tourType],
    queryFn: () => fetchToursByTourType(tourType),
    enabled: !!tourType,
    ...options,
  });
}
// hook for fetching most popular tours
export function useFetchToursByMostPopular(
  options?: UseQueryOptions<Tours[], Error>
) {
  return useQuery<Tours[], Error>({
    queryKey: ["tours", "popular tours"],
    queryFn: fetchToursByMostPopular,
    ...options,
  });
}
