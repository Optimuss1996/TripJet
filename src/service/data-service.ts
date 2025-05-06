import { supabase } from "@/lib/supabaseClient";
import { Cities, Tours } from "@/types/types";

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
// fetch most discount tours
export async function fetchToursByTopDiscounts(): Promise<Tours[]> {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .order("discount", { ascending: false })
    .limit(10);

  if (error) {
    console.error("Error fetching top discounts:", error);
  } else {
    console.log("Top 10 discounts:", data);
  }
  return data as Tours[];
}
// fetch tours by highest price
export async function fetchToursByHighestPrice(): Promise<Tours[]> {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .order("price", { ascending: false })
    .limit(6);

  if (error) {
    console.error("Error fetching highest price:", error);
  } else {
    console.log("Top 10 highest prices:", data);
  }
  return data as Tours[];
}
// fetch tours by tour type
export async function fetchToursByTourType(
  tourType?: string
): Promise<Tours[]> {
  if (!tourType) return [];

  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .eq("type_slug", tourType)
    .limit(6);

  if (error) {
    console.error("Error fetching tours by tour type:", error);
  } else {
    console.log(`tours by ${tourType} tour type:`, data);
  }

  return data as Tours[];
}
// fetch most popular tours
export async function fetchToursByMostPopular(): Promise<Tours[]> {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .order("tour_rating", { ascending: false })
    .limit(10);

  if (error) {
    console.error("Error most popular tours:", error);
  } else {
    console.log("Top 10 most popular tours:", data);
  }
  return data as Tours[];
}
