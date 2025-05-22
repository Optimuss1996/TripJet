import { useEffect, useState } from "react";
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

interface InputDatePickerProps {
  value?: string; // expected format: "YYYY-MM-DD" in Gregorian
  onChange: (value: string) => void;
}

export default function InputDatePicker({
  value,
  onChange,
}: InputDatePickerProps) {
  const [year, setYear] = useState<string | undefined>();
  const [month, setMonth] = useState<string | undefined>();
  const [day, setDay] = useState<string | undefined>();
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);

  // 1. Parse incoming Gregorian value to Jalali on mount or update
  useEffect(() => {
    if (value) {
      const [gy, gm, gd] = value.split("-").map(Number);
      const { jy, jm, jd } = jalaali.toJalaali(gy, gm, gd);
      setYear(jy.toString());
      setMonth(months[jm - 1]);
      setDay(jd.toString());
    }
  }, [value]);

  // 2. Update list of valid days when month/year changes
  useEffect(() => {
    if (year && month) {
      const monthIndex = months.indexOf(month) + 1;
      const days = jalaali.jalaaliMonthLength(parseInt(year), monthIndex);
      const result = Array.from({ length: days }, (_, i) => i + 1);
      setDaysInMonth(result);
    }
  }, [year, month]);

  // 3. When all selected, convert to Gregorian and call onChange
  useEffect(() => {
    if (year && month && day) {
      const jm = months.indexOf(month) + 1;
      const { gy, gm, gd } = jalaali.toGregorian(
        parseInt(year),
        jm,
        parseInt(day)
      );
      const formatted = `${gy}-${String(gm).padStart(2, "0")}-${String(
        gd
      ).padStart(2, "0")}`;
      onChange(formatted);
    }
  }, [year, month, day, onChange]);

  return (
    <div className="flex items-center justify-between h-14 border border-neutral-text-200 rounded-lg w-full relative px-2 gap-2">
      <span className="absolute right-4 -top-3 bg-white z-10 text-neutral-text-400 bg-neutral-white px-2">
        تاریخ تولد
      </span>

      {/* Year */}
      <Select value={year} onValueChange={setYear}>
        <SelectTrigger className="border-none focus:outline-none focus:ring-0 flex justify-center items-center gap-2">
          <SelectValue placeholder="سال" />
          <ChevronDown className="opacity-80" size={20} />
        </SelectTrigger>
        <SelectContent>
          {generateYears().map((y) => (
            <SelectItem key={y} value={y}>
              {convertEnToFaNumbers(y)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="border h-2/3" />

      {/* Month */}
      <Select value={month} onValueChange={setMonth}>
        <SelectTrigger className="border-none focus:outline-none focus:ring-0 flex justify-center items-center gap-2">
          <SelectValue placeholder="ماه" />
          <ChevronDown className="opacity-80" size={20} />
        </SelectTrigger>
        <SelectContent>
          {months.map((m, i) => (
            <SelectItem key={i} value={m}>
              {m}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="border h-2/3" />

      {/* Day */}
      <Select value={day} onValueChange={setDay} disabled={!year || !month}>
        <SelectTrigger className="border-none focus:outline-none focus:ring-0 flex justify-center items-center gap-2">
          <SelectValue placeholder="روز" />
          <ChevronDown className="opacity-80" size={20} />
        </SelectTrigger>
        <SelectContent>
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
