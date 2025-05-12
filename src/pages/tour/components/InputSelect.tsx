import { convertEnToFaNumbers } from "@/utils/Commonconvert";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

interface InputSelectProps {
  remainingCapacity: number;
}

export default function InputSelect({ remainingCapacity }: InputSelectProps) {
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
  // by this line i sure maxSelectable is not more than 5 or remainingCapacity
  const maxSelectable = Math.min(5, remainingCapacity);
  const options = Array.from({ length: maxSelectable }, (_, i) => i + 1);

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        onClick={() => setShowList((prev) => !prev)}
        className="flex items-center justify-between w-full border border-gray-300 focus:border-primary rounded-md px-3 py-2 bg-white cursor-pointer"
      >
        <input
          type="text"
          readOnly
          value={selected ? `${convertEnToFaNumbers(selected)} نفر` : ""}
          className="outline-none flex-1 bg-neutral-white text-right h-9 text-primary placeholder:text-gray-400 focus:border-primary"
          placeholder="تعداد نفرات"
        />
        <FaChevronDown className="text-gray-500 ml-2" />
      </div>

      {showList && (
        <ul className="absolute z-50 w-full bg-neutral-white border border-gray-300 focus:border-primary mt-1 rounded-md max-h-60 overflow-y-auto shadow-md px-2 py-1 shadow-drop">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
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
