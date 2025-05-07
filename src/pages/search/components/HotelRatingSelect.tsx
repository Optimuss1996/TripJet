import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { hotelRating } from "@/utils/tourFilters";
import { FaStar } from "react-icons/fa";

export default function HotelRatingSelect() {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState<number | null>(null);

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
          <div className="border rounded-lg p-3 flex gap-1">
            {hotelRating.options.map((option, index) => {
              const isSelected = selected === index;

              return (
                <div
                  key={option.value}
                  onClick={() => setSelected(isSelected ? null : index)}
                  className={`flex flex-row-reverse items-center justify-center gap-[3px] cursor-pointer px-3 py-1 rounded-md transition-colors
                    ${
                      isSelected
                        ? "bg-primary-100 text-primary-100"
                        : "hover:bg-neutral-100 text-neutral-text-500"
                    }
                  `}
                >
                  <span className="text-labelMd">{option.label}</span>
                  <FaStar
                    className={`${
                      isSelected ? "text-secondary-500" : "text-secondary-400"
                    }`}
                    size={18}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
