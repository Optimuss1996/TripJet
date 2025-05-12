import { CiViewList } from "react-icons/ci";

export default function RulesTour() {
  const items = [
    "از زمان ثبت‌نام تا 15 روز قبل از سفر شامل جریمه نمی‌شود.",
    "از 14 روز تا 7 روز قبل از سفر شامل 20 درصد جریمه می‌شود.",
    "از 6 روز تا 4 روز کاری قبل از سفر شامل 40 درصد جریمه می‌شود.",
    "از 3 روز تا 2 روز قبل از حرکت تور شامل 60 درصد جریمه می‌شود.",
    "تا 24 ساعت قبل از حرکت تور شامل 70 درصد جریمه می‌شود.",
    " از 24 ساعت قبل از سفر تا زمان حرکت شامل 90 درصد جریمه می‌شود.",
    "سایر وعده‌های غذایی به عهده مسافر است که در رستوران سرو می شود.",
  ];

  return (
    <section>
      <div className="flex items-center gap-2 font-semibold mb-6">
        <CiViewList size={20} className=" text-primary" />
        قوانین و شرایط
      </div>
      <ul className=" flex flex-col gap-2 bg-neutral-white p-4 rounded-lg border border-gray-300 ">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 text-labelSm md:text-bodyMd"
          >
            <span className="text-xl leading-4 text-neutral-text-900">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
