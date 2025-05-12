export interface User {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  national_code: string;
  birth_date: string;
  city: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
}

export interface Tours {
  id: string;
  user_id: string;
  title: string;
  name_slug: string;
  description: string;
  price: number;
  location: {
    lat: number;
    lng: number;
  };
  start_date: string;
  end_date: string;
  duration_days: number;
  images: string[];
  created_at: string;
  city_id: string;
  is_international: boolean;
  hotel_rating: number;
  tour_rating: number;
  tour_type: "طبیعت گردی" | "فرهنگی" | "ورزشی" | "سیاحتی";
  type_slug: "sports" | "nature" | "cultural" | "sightseeing";
  difficulty_level: string;
  meal_count: number;
  discount: number;
  total_capacity: number;
  remaining_capacity: number;
  image: string;
}
export interface Cities {
  id: string;
  created_at: string;
  city_name: string;
  persian_cityName: string;
  country_name: string;
  is_international: boolean;
}
export interface Reviews {
  id: number;
  tour_id: string;
  user_id: string;
  comment: string;
  rating: number;
  created_at: string;
  updated_at: string;
  is_approved: boolean;
}
export interface Favorites {
  id: number;
  user_id: string;
  tour_id: string;
  created_at: string;
}
export interface Bookings {
  id: string;
  user_id: string;
  tour_id: string;
  number_of_people: number;
  total_price: number;
  status: "pending" | "confirmed" | "canceled";
  created_at: string;
}
export interface OptionalFilters {
  is_international?: boolean;
  city_id?: string;
  hotel_rating?: number;
  price_range?: string;
  tour_type?: string;
  difficulty_level?: number;
  tour_rating?: number;
}
