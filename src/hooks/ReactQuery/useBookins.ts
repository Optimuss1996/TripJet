import { fetchReserveTour } from "@/service/data-service";
import { BookingWithTour } from "@/types/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

// hook for fetching reserve bookings by user id
export function useFetchReserveBookings(
  userId: string | undefined,
  options?: UseQueryOptions<BookingWithTour[], Error>
) {
  return useQuery<BookingWithTour[], Error>({
    queryKey: ["bookings", userId],
    queryFn: () => fetchReserveTour(userId!),
    enabled: !!userId,
    ...options,
  });
}
