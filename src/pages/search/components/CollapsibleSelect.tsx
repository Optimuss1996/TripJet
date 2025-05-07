import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

type Option = {
  label: string;
  value: string;
};

interface CollapsibleMultiSelectProps {
  options: Option[];
  placeholder?: string;
  id: string;
}

export default function CollapsibleMultiSelect({
  options,
  placeholder,
  id,
}: CollapsibleMultiSelectProps) {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);
  console.log(id);
  const handleSelect = (value: string) => {
    setSelected((prev) => (prev === value ? null : value));
  };
  return (
    <div className="w-full  border bg-neutral-white rounded-t-md">
      <div
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 cursor-pointer "
      >
        <span className="text-neutral-text-900 text-labelLg">
          {placeholder}
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
        className={`overflow-hidden overflow-x-auto  ${
          open ? "max-h-96 mt-2" : " hidden"
        }`}
      >
        <div className=" flex flex-col gap-3 border rounded-b-lg px-3 py-2 bg-neutral-white ">
          {options.map((option) => {
            return (
              <div
                key={option.value}
                className="flex items-center justify-start gap-2 cursor-pointer text-neutral-text-500"
              >
                <Checkbox
                  checked={selected === option.label}
                  onCheckedChange={() => handleSelect(option.label)}
                  className="border border-neutral-900 data-[state=checked]:bg-primary   rounded-md w-5 h-5 data-[state=checked]:text-neutral-white p-[1px]"
                />
                <span className=" text-labelMd">{option.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
