import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { OptionalFilters, Tours } from "@/types/types";
import {
  fetchToursByTopDiscounts,
  fetchToursByHighestPrice,
  fetchToursByTourType,
  fetchToursByMostPopular,
  fetchToursByCityId,
  fetchToursWithFilters,
  fetchTourBySlugName,
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
// hook for fetching tours by city_id
export function useFetchToursByCityId(
  cityId: string,
  options?: UseQueryOptions<Tours[], Error>
) {
  return useQuery<Tours[], Error>({
    queryKey: ["tours", "by city_id"],
    queryFn: () => fetchToursByCityId(cityId),
    enabled: !!cityId,
    ...options,
  });
}
// hook for fetching tours by filter
export function useToursByFilter(filters: OptionalFilters) {
  return useQuery({
    queryKey: ["tours", filters],
    queryFn: () => fetchToursWithFilters(filters),
    // keepPreviousData: true,
  });
}
// hook for fetching tour by slugName
export function useFetchTourBySlugName(tourSlugName: string) {
  return useQuery({
    queryKey: ["tour", "slug name"],
    queryFn: () => fetchTourBySlugName(tourSlugName),
  });
}
