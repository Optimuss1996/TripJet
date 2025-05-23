import jalaali from "jalaali-js";
import { toJalaali } from "jalaali-js";
// convert dollar to toman with comma
export function convertDollarToToman(priceInDollar: number): string {
  const toman = priceInDollar * 50000;
  return toman.toLocaleString("fa-IR");
}

// convert Miladi date to shamsi date
const persianMonths = [
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

export function convertGregorianToPersian(dateStr: string): {
  year: number;
  monthName: string;
  day: number;
} {
  const date = new Date(dateStr);
  const { gy, gm, gd } = {
    gy: date.getFullYear(),
    gm: date.getMonth() + 1,
    gd: date.getDate(),
  };
  const { jy, jm, jd } = toJalaali(gy, gm, gd);

  return {
    year: jy,
    monthName: persianMonths[jm - 1],
    day: jd,
  };
}
// convert english number to persian number
export function convertEnToFaNumbers(input?: string | number | null): string {
  if (input === null || input === undefined) return "";

  const value = input.toString();

  const enToFaMap: Record<string, string> = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };

  return value.replace(/[0-9]/g, (digit) => enToFaMap[digit] || digit);
}

//
//
//
//
//
export function convertFaToEnNumbers(input: string): string {
  const enDigits = "0123456789";
  const faDigits = "۰۱۲۳۴۵۶۷۸۹";

  return input.replace(/[۰-۹]/g, (w) => enDigits[faDigits.indexOf(w)]);
}

// تابع تبدیل میلادی به شمسی و اعداد به فارسی
export function convertGregorianToPersianWithNumbers(dateStr: string) {
  const date = new Date(dateStr);
  const jDate = jalaali.toJalaali(date);

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

  // تبدیل اعداد به فارسی
  const convertToPersianNumbers = (str: string) => {
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return str.replace(/\d/g, (digit) => persianNumbers[+digit]);
  };

  const year = convertToPersianNumbers(jDate.jy.toString());
  const monthName = months[jDate.jm - 1];
  const day = convertToPersianNumbers(jDate.jd.toString());

  return {
    year,
    monthName,
    day,
  };
}
