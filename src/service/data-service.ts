import { supabase } from "@/lib/supabaseClient";
import { Cities } from "@/types/types";

// fetch all cities
export async function fetchAllCities(): Promise<Cities[]> {
  const { data, error } = await supabase.from("cities").select("*");

  if (error) {
    console.error("Error fetching all cities:", error.message);
    throw error;
  }

  return data as Cities[];
}
// fetch all cities by is_international boolean
export async function fetchAllCitiesByIsInternational(
  is_international: boolean
): Promise<Cities[]> {
  const { data, error } = await supabase
    .from("cities")
    .select("*")
    .eq("is_international", is_international);

  if (error) {
    console.error("Error fetching cities by is_international:", error.message);
    throw error;
  }

  return data as Cities[];
}
