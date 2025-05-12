export const tourFilters = [
  {
    id: "price",
    placeholder: " بازه قیمتی تورها",
    options: [
      { label: "از ۰ تا ۲۰ میلیون تومان", value: "0-20000000" },
      { label: "از ۲۰ تا ۳۵ میلیون تومان", value: "20000000-35000000" },
      { label: "از ۳۵ تا ۵۰ میلیون تومان", value: "35000000-50000000" },
      { label: "از ۵۰ میلیون تومان به بالا", value: "50000000+" },
    ],
  },
  {
    id: "tourType",
    placeholder: "   نوع تورها",
    options: [
      { label: "تور طبیعت گردی   ", value: "nature" },
      { label: "تور فرهنگی ", value: "cultural" },
      { label: "تور ورزشی ", value: "sports" },
      { label: "تور سیاحتی ", value: "sightseeing" },
    ],
  },
  {
    id: "level",
    placeholder: "سطح تور",
    options: [
      { label: "درجه سختی ۱ (سبک)", value: "1" },
      { label: "درجه سختی ۲ (متوسط)  ", value: "2" },
      { label: "درجه سختی ۳ (سخت)", value: "3" },
      { label: "  درجه سختی ۴ (سنگین) ", value: "4" },
      { label: "درجه سختی ۵ (فوق سنگین) ", value: "5" },
    ],
  },

  {
    id: "rating",
    placeholder: "امتیاز کاربران",
    options: [
      { label: "عالی (امتیاز ۴ به بالا)", value: "5" },
      { label: " معمولی (امتیاز بین ۳ و ۴)", value: "3to4" },
      { label: " ضعیف (امتیاز زیر ۳)", value: "0to2" },
    ],
  },
];
export const hotelRating = {
  id: "hotelRating",
  placeholder: " ستاره هتل",
  options: [
    { label: "۱", value: "1" },
    { label: "۲", value: "2" },
    { label: "۳", value: "3" },
    { label: "۴", value: "4" },
    { label: "۵", value: "5" },
  ],
};
