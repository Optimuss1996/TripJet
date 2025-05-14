import {
  fetchAllCities,
  fetchAllCitiesByIsInternational,
} from "@/service/data-service";
import { Cities } from "@/types/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

// hook for fetching all cities
export function useAllCities(options?: UseQueryOptions<Cities[], Error>) {
  return useQuery<Cities[], Error>({
    queryKey: ["cities", "all"],
    queryFn: fetchAllCities,
    ...options,
  });
}
// hook for fetching all cities by is_international boolean
export function useCitiesByIsInternational(
  is_international: boolean,
  options?: UseQueryOptions<Cities[], Error>
) {
  return useQuery<Cities[], Error>({
    queryKey: ["cities", is_international],
    queryFn: () => fetchAllCitiesByIsInternational(is_international),
    enabled: typeof is_international === "boolean", // only run if is_international is boolean
    ...options,
  });
}
