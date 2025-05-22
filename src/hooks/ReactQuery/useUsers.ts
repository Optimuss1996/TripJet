import { fetchUsersById } from "@/service/data-service";
import { Users } from "@/types/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

// hook for fetching all cities by is_international boolean
export function useFetchUsersById(
  id: string,
  options?: Omit<
    UseQueryOptions<Users, Error, Users, [string, string]>,
    "queryKey" | "queryFn"
  >
) {
  return useQuery<Users, Error, Users, [string, string]>({
    queryKey: ["users", id],
    queryFn: () => fetchUsersById(id),
    enabled: !!id,
    ...options,
  });
}
