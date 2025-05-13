import { useState } from "react";
import { useLocation } from "react-router";
import { useToursByFilter } from "@/hooks/useTours";
import { tourFilters } from "@/utils/tourFilters";

import CollapsibleMultiSelect from "./CollapsibleSelect";
import HorizontalCard from "./HorizontalCard";
import HotelRatingSelect from "./HotelRatingSelect";
import SelectedFilters from "./SelectedFilters";
import { BsListCheck } from "react-icons/bs";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerTrigger,
} from "@/components/ui/drawer";
import NotFoundTours from "./NotFoundTours";
import Spinner from "@/components/common/spinner";

export default function Tours() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  //
  //
  //
  const filters = {
    price_range: searchParams.get("price_range") || undefined,

    hotel_rating: searchParams.get("hotel_rating")
      ? Number(searchParams.get("hotel_rating"))
      : undefined,

    difficulty_level: searchParams.get("difficulty_level")
      ? Number(searchParams.get("difficulty_level"))
      : undefined,

    tour_type: searchParams.get("tour_type") || undefined,
    tour_rating: searchParams.get("tour_rating")
      ? Number(searchParams.get("tour_rating"))
      : undefined,

    is_international:
      searchParams.get("is_international") === "true"
        ? true
        : searchParams.get("is_international") === "false"
        ? false
        : undefined,

    city_id: searchParams.get("city_id") || undefined,
  };
  //
  //
  //
  const { data: tours, isLoading } = useToursByFilter(filters);

  const Filters = (
    <div className="flex flex-col items-center gap-y-6 w-full md:w-60 lg:w-64 xl:w-72">
      <HotelRatingSelect />
      {tourFilters.map((filter) => (
        <CollapsibleMultiSelect
          key={filter.id}
          id={filter.id}
          options={filter.options}
          placeholder={filter.placeholder}
        />
      ))}
    </div>
  );

  return (
    <main className="flex flex-col md:flex-row gap-6 px-4 md:px-6 lg:px-20 mt-5 mb-16">
      {/*filter feature for mobile or smaller than md*/}
      <div className="block md:hidden mb-4">
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <div className="w-28 flex items-center justify-center gap-2 border border-neutral-400 text-primary  rounded-lg px-3 py-2">
              <BsListCheck className="text-primary" size={20} />
              <span>فیلترها</span>
            </div>
          </DrawerTrigger>
          <DrawerOverlay className="bg-neutral-black/45" />
          <DrawerContent className="flex flex-col gap-4 p-4">
            <SelectedFilters />
            {Filters}
          </DrawerContent>
        </Drawer>
      </div>

      <section className="hidden md:flex flex-col md:w-60 lg:w-64 xl:w-72">
        <SelectedFilters />
        <div className="md:flex flex-col gap-y-8">{Filters}</div>
      </section>

      <section className="flex-1 ">
        {tours?.length === 0 ? (
          <div className=" p-4">
            <NotFoundTours />
          </div>
        ) : (
          <div>
            <div>{isLoading && <Spinner />}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-col gap-6">
              {tours?.map((tour) => (
                <HorizontalCard key={tour.id} tour={tour} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
