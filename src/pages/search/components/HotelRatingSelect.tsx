import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { hotelRating } from "@/utils/tourFilters";
import { FaStar } from "react-icons/fa";
import { useSearchParams } from "react-router";

export default function HotelRatingSelect() {
  const [open, setOpen] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get(hotelRating.id);

  const handleSelect = (value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (selectedId === value) {
      newParams.delete(hotelRating.id);
    } else {
      newParams.set(hotelRating.id, value);
    }

    setSearchParams(newParams, { replace: true });
  };

  return (
    <div className="w-full border bg-neutral-white rounded-t-md">
      <div
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 cursor-pointer"
      >
        <span className="text-neutral-text-900 text-labelLg">
          {hotelRating.placeholder}
        </span>
        <span>
          {open ? (
            <IoIosArrowUp className="text-neutral-text-500" size={24} />
          ) : (
            <IoIosArrowDown className="text-neutral-text-500" size={24} />
          )}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-2" : "hidden"
        }`}
      >
        <div className="flex justify-center items-center border rounded-lg px-3 py-4 bg-neutral-white">
          <div className="flex justify-center items-center gap-[1px] border rounded-lg p-3 bg-neutral-white w-full">
            {hotelRating.options.map((option, index) => {
              const isSelected = selectedId === option.value;

              return (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`flex flex-row-reverse items-stretch justify-center gap-[3px] cursor-pointer px-3 py-1 rounded-md transition-colors border-l border-neutral-400 
                    ${
                      isSelected
                        ? "bg-primary-100"
                        : "hover:bg-neutral-100 text-neutral-text-500"
                    }
                    ${
                      index === hotelRating.options.length - 1
                        ? "border-none"
                        : ""
                    }
                  `}
                >
                  <span className="text-labelMd">{option.label}</span>
                  <FaStar className="text-secondary-400" size={18} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
