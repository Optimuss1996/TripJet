import { BadgeCheck } from "lucide-react";

export default function TourServices() {
  const services = ["اقامتگاه", "حمل و نقل", "لیدر محلی", "وعده‌های غذایی"];

  return (
    <section>
      <div className="flex items-center gap-2 font-semibold mb-6">
        <BadgeCheck size={18} className="text-primary" />
        خدمات تور
      </div>
      <ul className=" flex justify-start items-center  gap-3 bg-neutral-white p-4 rounded-lg border border-gray-300 ">
        {services.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-1 text-labelSm md:text-bodyMd"
          >
            <span className="text-xl leading-4 text-neutral-text-900">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
