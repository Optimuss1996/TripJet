import { BadgeCheck } from "lucide-react";

export default function TourServices() {
  const services = ["اقامتگاه", "حمل و نقل", "لیدر محلی", "وعده‌های غذایی"];

  return (
    <section>
      <div className="flex items-center gap-2 font-semibold mb-6">
        <BadgeCheck size={18} className="text-primary" />
        خدمات تور
      </div>
      <div className=" flex items-center justify-start bg-neutral-white p-4 rounded-lg border border-gray-300">
        {services.join(" • ")}
      </div>
    </section>
  );
}
