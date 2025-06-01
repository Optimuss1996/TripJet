import {
  useQuery,
  useMutation,
  UseQueryOptions,
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

type InsertParams = {
  user_id: string;
  full_name: string;
  birth_date: string;
  national_code: string;
};

export function useInsertPassengers() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: InsertParams) => insertPassengers(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["passengers"] });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });
}
