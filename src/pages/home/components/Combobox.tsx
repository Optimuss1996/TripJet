"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import Button from "@/components/common/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Cities } from "@/types/types";
import { CiLocationOn } from "react-icons/ci";

interface ComboboxProps {
  cities: Cities[];
}

export function Combobox({ cities }: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between  bg-neutral-white flex-1 relative border border-blue-500 rounded-lg "
        >
          {value
            ? cities.find((city) => city.city_name === value)?.city_name
            : "...دوبی , آنتالیا , لندن  "}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="center" className="w-full ">
        <Command>
          <CommandInput className="h-9" />
          <CommandList>
            <CommandEmpty>شهری یافت نشد</CommandEmpty>
            <CommandGroup>
              {cities.map((cities) => (
                <CommandItem
                  key={cities.id}
                  value={cities.persian_cityName}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <div className=" flex justify-start items-center gap-2 text-neutral-text-500 text-labelSm">
                    <CiLocationOn className=" " size={23} />
                    <p>{cities.persian_cityName}</p>
                  </div>
                  <Check
                    className={cn(
                      "ml-auto",
                      value === cities.city_name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
