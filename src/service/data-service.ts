import { supabase } from "@/lib/supabaseClient";
import { Cities, OptionalFilters, Tours } from "@/types/types";

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
// fetch tours by city_id
export async function fetchToursByCityId(cityId: string) {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .eq("city_id", cityId);

  if (error) {
    console.error("Error fetch tours by city_id:", error);
  } else {
    console.log("tours by city_id:", data);
  }

  return data as Tours[];
}
// 🚨This query is for fetching data with filters. Please note that these filters are optional🚨
export async function fetchToursWithFilters(
  filters: OptionalFilters
): Promise<Tours[]> {
  let query = supabase.from("tours").select("*");

  if (filters.is_international !== undefined) {
    query = query.eq("is_international", filters.is_international);
  }

  if (filters.city_id) {
    query = query.eq("city_id", filters.city_id);
  }

  if (filters.price_range) {
    const [min, max] = filters.price_range;
    query = query.gte("price", min).lte("price", max);
  }

  if (filters.hotel_rating !== undefined) {
    query = query.eq("hotel_stars", filters.hotel_rating);
  }

  if (filters.difficulty_level !== undefined) {
    query = query.eq("difficulty_level", filters.difficulty_level);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetch tours by filters:", error);
  } else {
    console.log("tours by filters:", data);
  }

  return data as Tours[];
}
// fetch tour by Id
export async function fetchTourBySlugName(
  tourSlugName: string
): Promise<Tours> {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .eq("name_slug", tourSlugName)
    .single();

  if (error) {
    console.error("Error fetch tour by slug name:", error);
  } else {
    console.log("tour by slug name:", data);
  }
  return data as Tours;
}
