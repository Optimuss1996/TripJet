import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGetCityId } from "@/store/useGetCityId";
import { Cities } from "@/types/types";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

interface CitiesProps {
  cities: Cities[];
}

export default function CitySelector({ cities }: CitiesProps) {
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);
  const [selectedCity, setSelectedCity] = useState<Cities | null>(null);
  const cityId = useGetCityId();
  const containerRef = useRef<HTMLDivElement>(null);
  const filteredCities = cities.filter((city) =>
    city.persian_cityName.includes(query.trim())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full " ref={containerRef}>
      <div
        onClick={() => setShowList((prev) => !prev)}
        className="flex items-center justify-between w-full border border-gray-300 focus:border-primary rounded-md px-3 py-2 bg-white cursor-pointer "
      >
        <input
          type="text"
          placeholder="شهر مورد نظر را وارد کنید"
          className="outline-none flex-1 bg-transparent text-right h-9 text-primary"
          value={query || selectedCity?.persian_cityName || ""}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowList(true);
            setSelectedCity(null);
          }}
        />
        <FaChevronDown className="text-gray-500 ml-2" />
      </div>

      {showList && (
        <ul className="absolute z-50 w-full bg-neutral-white border border-neutral-400 mt-1 rounded-md max-h-60 overflow-y-auto shadow-md px-2 py-1 ">
          {filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <li
                key={city.id}
                onClick={() => {
                  setSelectedCity(city);
                  setQuery("");
                  setShowList(false);
                  cityId.setCityId(city.id);
                }}
                className="px-4 py-2 text-neutral-text-500 group hover:bg-primary-50 cursor-pointer text-right transition z-50"
              >
                <div className=" flex justify-start items-center gap-2 ">
                  <CiLocationOn
                    className=" group-hover:text-neutral-text-400 group-hover:text-primary/70"
                    size={20}
                  />
                  <span className=" group-hover:text-primary/70">
                    {city.persian_cityName}
                  </span>
                </div>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-neutral-text-500 text-right">
              در حال دریافت لیست شهر ها...
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
