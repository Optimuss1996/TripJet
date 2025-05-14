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
  const [isFocused, setIsFocused] = useState<boolean>(false);
  //
  //
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
    <div
      onClick={() => setIsFocused(!isFocused)}
      className={`flex items-center justify-between max-w-[420px] h-14 border border-neutral-text-200 rounded-lg ${
        isFocused && "border-primary "
      } relative`}
    >
      <span className=" absolute right-4 -top-3 bg-neutral-white z-10 text-neutral-text-400 px-2">
        تاریخ میلادی
      </span>
      {/* Year */}
      <Select value={year} onValueChange={setYear}>
        <SelectTrigger className="border-none focus:outline-none focus:ring-0 focus:ring-offset-0  flex items-center justify-center gap-2">
          <SelectValue placeholder="سال" />
          <ChevronDown className="opacity-80" size={20} />
        </SelectTrigger>
        <SelectContent className="max-h-[350px]">
          {generateYears().map((y) => (
            <SelectItem
              key={y}
              value={y}
              className="text-center hover:bg-primary-100"
            >
              {convertEnToFaNumbers(y)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className=" border h-2/3 " />
      {/* Month */}
      <Select value={month} onValueChange={setMonth}>
        <SelectTrigger className="border-none focus:outline-none focus:ring-0 focus:ring-offset-0 flex items-center justify-center gap-2 ">
          <SelectValue placeholder="ماه" className=" absolute" />
          <ChevronDown className="opacity-80" size={20} />
        </SelectTrigger>
        <SelectContent className="max-h-[350px]">
          {months.map((m, i) => (
            <SelectItem
              key={i}
              value={m}
              className="text-right hover:bg-primary-100"
            >
              {m}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className=" border h-2/3 " />

      {/* Day */}
      <Select value={day} onValueChange={setDay}>
        <SelectTrigger
          disabled={!year || !month}
          className=" border-none focus:outline-none focus:ring-0 focus:ring-offset-0  flex items-center justify-center gap-2"
        >
          <SelectValue placeholder="روز" />
          <ChevronDown className="opacity-80" size={20} />
        </SelectTrigger>
        <SelectContent className="max-h-[350px]">
          {daysInMonth.map((d) => (
            <SelectItem key={d} value={d.toString()}>
              {convertEnToFaNumbers(d)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
