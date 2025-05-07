"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Button from "@/components/common/Button";

type Option = {
  label: string;
  value: number;
};

interface CollapsibleMultiSelectProps {
  options: Option[];
  selected: Option[];
  onChange: (selected: Option[]) => void; // اصلاح اینجا
  placeholder?: string;
}

export default function CollapsibleMultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select options...",
}: CollapsibleMultiSelectProps) {
  const [open, setOpen] = useState(false);

  const toggleOption = (option: Option) => {
    const exists = selected.find((item) => item.value === option.value);
    if (exists) {
      onChange(selected.filter((item) => item.value !== option.value));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <Button onClick={() => setOpen(!open)} className="w-full justify-between">
        <span>
          {selected.length > 0
            ? selected.map((s) => s.label).join(", ")
            : placeholder}
        </span>
        <span>{open ? "▲" : "▼"}</span>
      </Button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-2" : "max-h-0"
        }`}
      >
        <div className="border rounded-md p-2 bg-white dark:bg-black space-y-2">
          {options.map((option) => {
            const isChecked = selected.some(
              (item) => item.value === option.value
            );
            return (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={() => toggleOption(option)}
                />
                <span>{option.label}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
