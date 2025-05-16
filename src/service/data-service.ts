import { supabase } from "@/lib/supabaseClient";
import { BookingWithTour, Cities, OptionalFilters, Tours } from "@/types/types";

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
export const fetchToursWithFilters = async (filters: OptionalFilters) => {
  let query = supabase.from("tours").select("*");

  const priceRanges = {
    "0-20000000": { min: 0, max: 400 },
    "20000000-35000000": { min: 400, max: 700 },
    "35000000-50000000": { min: 700, max: 1000 },
    "50000000+": { min: 1000, max: null },
  };

  // filter by price range
  if (filters.price_range && filters.price_range in priceRanges) {
    const range = priceRanges[filters.price_range as keyof typeof priceRanges];
    if (range.min !== null) query = query.gte("price", range.min);
    if (range.max !== null) query = query.lte("price", range.max);
  }

  // filter by hotel rating
  if (filters.hotel_rating !== undefined) {
    query = query.eq("hotel_rating", filters.hotel_rating);
  }

  // filter by difficulty level
  if (filters.difficulty_level !== undefined) {
    query = query.eq("difficulty_level", filters.difficulty_level);
  }

  // filter by tour type
  if (filters.tour_type) {
    query = query.eq("tour_type", filters.tour_type);
  }

  // filter by tour rating
  if (filters.tour_rating !== undefined) {
    query = query.gte("tour_rating", filters.tour_rating);
  }

  // filter by is international
  if (filters.is_international !== undefined) {
    query = query.eq("is_international", filters.is_international);
  }

  // filter by city id
  if (filters.city_id) {
    query = query.eq("city_id", filters.city_id);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching filtered tours:", error.message);
    return [];
  }

  return data as Tours[];
};

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

// fetch reserve tour
export async function fetchReserveTour(
  userId: string
): Promise<BookingWithTour[]> {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, tours(*)")
    .eq("user_id", userId);

  if (error) {
    console.error("Error fetch reserve tour by userId:", error);
    throw error;
  } else {
    console.log("reserve tour by userId:", data);
  }
  return data as BookingWithTour[];
}
// 🚨insert queries🚨 //

// insert reserve tour to booking table
export async function insertReserveTour(
  tourId: string,
  userId: string,
  numberOfPeople: number,
  total_price: number,
  status: "pending" | "confirmed" | "canceled"
) {
  const { data, error } = await supabase
    .from("bookings")
    .insert([
      {
        user_id: userId,
        tour_id: tourId,
        number_of_people: numberOfPeople,
        total_price: total_price,
        status: status,
      },
    ])
    .select();

  if (error) {
    console.error("Error inserting reserve tour:", error);
    throw error;
  } else {
    console.log("Inserted reserve tour:", data);
  }
}
// insert liked tour to favorites table
export async function insertLikedTour(tourId: string, userId: string) {
  const { data, error } = await supabase
    .from("favorites")
    .insert([
      {
        user_id: userId,
        tour_id: tourId,
      },
    ])
    .select();

  if (error) {
    console.error("Error inserting liked tour:", error);
    throw error;
  } else {
    console.log("inserted favorites tour:", data);
  }
}
