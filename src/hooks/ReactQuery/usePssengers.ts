import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import {
  fetchPassengersByUserId,
  insertPassengers,
} from "@/service/data-service";
import { Passengers } from "@/types/types";

// 🚨fetch passengers by userId🚨 //
export function useFetchPassengersByUserId(
  userId: string,
  options?: Omit<
    UseQueryOptions<Passengers[], Error, Passengers[], [string, string]>,
    "queryKey" | "queryFn"
  >
) {
  return useQuery<Passengers[], Error, Passengers[], [string, string]>({
    queryKey: ["passengers", userId],
    queryFn: () => fetchPassengersByUserId(userId),
    enabled: !!userId,
    ...options,
  });
}

// 🚨insert passengers🚨 //
export function useInsertPassengers(
  passengers: Passengers[],
  options?: UseMutationOptions<Passengers[], Error>
) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => insertPassengers(passengers),
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["passengers"] });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });
}
