import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Button from "@/components/common/Button";
import SimpleCard from "./SimpleCard";
import {
  useFetchToursByHighestPrice,
  useToursByTourType,
} from "@/hooks/ReactQuery/useTours";
import { HorizontalSkeleton } from "@/components/common/HorizontalSkeleton";
import { Link } from "react-router";

const tourTypes = [
  { label: "لوکس ترین", value: "price" },
  { label: "طبیعت گردی", value: "nature" },
  { label: "ورزشی", value: "sports" },
  { label: "فرهنگی", value: "cultural" },
];

export default function CategoryTours() {
  const [active, setActive] = useState(0);
  const [selectedType, setSelectedType] = useState<
    "price" | "nature" | "sports" | "cultural"
  >("price");

  const { data: toursPrice, isLoading: isLoadingPrice } =
    useFetchToursByHighestPrice();

  const { data: toursByType, isLoading: isLoadingType } = useToursByTourType(
    selectedType !== "price" ? selectedType : undefined
    // { enabled: selectedType !== "price" }
  );

  const handleClick = (
    index: number,
    type: "price" | "nature" | "sports" | "cultural"
  ) => {
    setActive(index);
    setSelectedType(type);
  };

  const currentTours = selectedType === "price" ? toursPrice : toursByType;
  const isLoading = selectedType === "price" ? isLoadingPrice : isLoadingType;

  return (
    <main className="text-neutral-300 px-5 lg:px-24 my-28 w-full">
      <section className=" mb-6">
        <div className="flex justify-start items-center gap-3 mb-6">
          <CgMenuRight className="text-primary" size={30} />
          <p className="font-semibold text-bodyLg text-neutral-black">
            دسته‌بندی تورها
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 lg:gap-2">
            {tourTypes.map((type, index) => (
              <Button
                key={type.value}
                onClick={() =>
                  handleClick(
                    index,
                    type.value as "price" | "nature" | "sports" | "cultural"
                  )
                }
                className={`px-2 py-1 rounded-md border text-bodySm lg:text-bodyMd ${
                  active === index
                    ? "bg-primary-100 text-primary"
                    : "bg-neutral-white text-neutral-text-500 border-neutral-400"
                }`}
              >
                {type.label}
              </Button>
            ))}
          </div>

          <div className="hidden md:flex gap-x-3">
            <p className="text-primary">مشاهده همه</p>
            <span className="bg-neutral-white shadow-drop rounded-lg cursor-pointer p-1">
              <MdArrowForwardIos className="text-neutral-text-500" size={20} />
            </span>
            <span className="bg-neutral-white shadow-drop rounded-lg cursor-pointer p-1">
              <MdArrowBackIos className="text-neutral-text-500" size={20} />
            </span>
          </div>
        </div>
      </section>

      <section>
        {isLoading ? (
          <HorizontalSkeleton numberOfSkeleton={6} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {currentTours?.map((tour) => (
              <Link
                to={`/tour/${tour.name_slug}`}
                target="_blank"
                rel="noopener noreferrer"
                key={tour.id}
              >
                <SimpleCard tour={tour} />
              </Link>
            ))}
            )
          </div>
        )}
      </section>
    </main>
  );
}
