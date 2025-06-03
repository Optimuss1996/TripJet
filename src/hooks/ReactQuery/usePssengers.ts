import {
  useQuery,
  useMutation,
  UseQueryOptions,
  useQueryClient,
} from "@tanstack/react-query";
import {
  deletePassengers,
  fetchPassengersByUserId,
  getPassengerById,
  insertPassengers,
  updatePassengers,
} from "@/service/data-service";
import { Passengers } from "@/types/types";
import { PassengerSchemaType } from "@/utils/userSchema";

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
// 🚨update passengers by passenger id🚨 //

export function useUpdatePassengers() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      passengerId,
      values,
    }: {
      passengerId: string;
      values: PassengerSchemaType;
    }) => updatePassengers(passengerId, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["passengers"] });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });
}
// 🚨delete passengers by passenger id🚨 //

export function useDeletePassengers() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (passengerId: string) => deletePassengers(passengerId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["passengers"] });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });
}

export function useGetPassenger(
  passengerId: string,
  options?: Omit<
    UseQueryOptions<
      PassengerSchemaType,
      Error,
      PassengerSchemaType,
      [string, string]
    >,
    "queryKey" | "queryFn"
  >
) {
  return useQuery<
    PassengerSchemaType,
    Error,
    PassengerSchemaType,
    [string, string]
  >({
    queryKey: ["passenger", passengerId],
    queryFn: () => getPassengerById(passengerId),
    enabled: !!passengerId,
    ...options,
  });
}
