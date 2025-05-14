import { useState, useEffect } from "react";
import jalaali from "jalaali-js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { convertEnToFaNumbers } from "@/utils/Commonconvert";
import { ChevronDown } from "lucide-react";

const months = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const generateYears = () => {
  const years = [];
  for (let y = 1404; y >= 1330; y--) {
    years.push(y.toString());
  }
  return years;
};

export default function JalaliDatePicker() {
  const [year, setYear] = useState<string | undefined>();
  const [month, setMonth] = useState<string | undefined>();
  const [day, setDay] = useState<string | undefined>();
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);

  useEffect(() => {
    if (year && month) {
      const monthIndex = months.indexOf(month) + 1;
      const { gy } = jalaali.toGregorian(parseInt(year), monthIndex, 1);
      const days = jalaali.jalaaliMonthLength(parseInt(year), monthIndex);
      const result = Array.from({ length: days }, (_, i) => i + 1);
      setDaysInMonth(result);
    }
  }, [year, month]);

  return (
    <div className="flex items-center justify-between max-w-[420px] h-14 border border-neutral-text-200 rounded-lg">
      {/* Year */}
      <Select value={year} onValueChange={setYear}>
        <SelectTrigger className=" border-none [&>svg]:hidden">
          <SelectValue placeholder="سال" />
          <ChevronDown />
        </SelectTrigger>
        <SelectContent className="max-h-[350px]">
          {generateYears().map((y) => (
            <SelectItem key={y} value={y}>
              {y}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Month */}
      <Select value={month} onValueChange={setMonth}>
        <SelectTrigger className=" border-none outline-none [&>svg]:hidden">
          <SelectValue placeholder="ماه" />
          <ChevronDown />
        </SelectTrigger>
        <SelectContent className="max-h-[350px]">
          {months.map((m, i) => (
            <SelectItem key={i} value={m}>
              {m}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Day */}
      <Select value={day} onValueChange={setDay}>
        <SelectTrigger
          disabled={!year || !month}
          className=" border-none outline-none  [&>svg]:hidden"
        >
          <SelectValue placeholder="روز" />
          <ChevronDown />
        </SelectTrigger>
        <SelectContent className="max-h-[350px]">
          {daysInMonth.map((d) => (
            <SelectItem key={d} value={d.toString()}>
              {d}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
