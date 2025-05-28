import { convertEnToFaNumbers } from "@/utils/Commonconvert";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

interface InputSelectProps {
  numberOfPeople: number | null;
  setNumberOfPeople: React.Dispatch<React.SetStateAction<number | null>>;
  remainingCapacity: number;
}

export default function InputSelect({
  numberOfPeople,
  setNumberOfPeople,
  remainingCapacity,
}: InputSelectProps) {
  const [showList, setShowList] = useState(false);
  const [openDirection, setOpenDirection] = useState<"up" | "down">("down");
  const containerRef = useRef<HTMLDivElement>(null);

  // بستن dropdown در صورت کلیک بیرون
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

  const handleToggle = () => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = 240; // حداکثر ارتفاع لیست

    // اگر فضای پایین کافی نبود، به بالا باز شود
    setOpenDirection(spaceBelow < dropdownHeight ? "up" : "down");
    setShowList((prev) => !prev);
  };

  const maxSelectable = Math.min(5, remainingCapacity);
  const options = Array.from({ length: maxSelectable }, (_, i) => i + 1);

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        onClick={handleToggle}
        className="flex items-center justify-between w-full border border-gray-300 focus:border-primary rounded-md px-3 py-2 bg-white cursor-pointer"
      >
        <input
          type="text"
          readOnly
          value={
            numberOfPeople ? `${convertEnToFaNumbers(numberOfPeople)} نفر` : ""
          }
          className="outline-none flex-1 bg-neutral-white text-right h-9 text-primary placeholder:text-gray-400"
          placeholder="تعداد نفرات را انتخاب کنید"
        />
        <FaChevronDown className="text-gray-500 ml-2" />
      </div>

      {showList && (
        <ul
          className={`absolute z-50 w-full bg-neutral-white border border-gray-300 rounded-md max-h-60 overflow-y-auto shadow-md px-2 py-1 shadow-[0px_0px_31px_3px_rgba(0,_0,_0,_0.1)] transition-all duration-200 ${
            openDirection === "up" ? "bottom-full mb-1" : "mt-1"
          }`}
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setNumberOfPeople(option);
                setShowList(false);
              }}
              className="px-4 py-2 text-gray-700 group hover:bg-primary-50 cursor-pointer text-right transition"
            >
              <div className="flex justify-start items-center gap-2">
                <FiUsers className="text-primary" size={18} />
                <span className="group-hover:text-primary/70">
                  {convertEnToFaNumbers(option)}
                </span>
                <span>نفر</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
