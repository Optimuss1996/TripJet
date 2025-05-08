import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerTrigger,
} from "@/components/ui/drawer";
import CollapsibleMultiSelect from "./CollapsibleSelect";
import HorizontalCard from "./HorizontalCard";
import { useState } from "react";
import { BsListCheck } from "react-icons/bs";
import { tourFilters } from "@/utils/tourFilters";
import HotelRatingSelect from "./HotelRatingSelect";
import SwitchComponent from "./SwitchComponent";

export default function Tours() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const Filters = (
    <div className="flex flex-col items-center gap-y-6 w-full md:w-60 lg:w-64 xl:w-72">
      <HotelRatingSelect />
      <SwitchComponent />
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
          <DrawerContent className="p-4">{Filters}</DrawerContent>
        </Drawer>
      </div>

      <section className="hidden md:flex flex-col gap-y-8 md:w-60 lg:w-64 xl:w-72">
        {Filters}
      </section>

      <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:flex flex-col gap-6">
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </section>
    </main>
  );
}
