import { Backpack } from "lucide-react";

export default function TourEquipments() {
  const items = [
    "کفش کتونی مناسب برای گشت ها",
    "کلاه نقاب دار",
    "وسایل حمام",
    "هم لباس تابستانی هم لباس زمستانی",
    "کرم ضد آفتاب",
  ];

  return (
    <section>
      <div className="flex items-center gap-2 font-semibold mb-6">
        <Backpack size={20} className=" text-primary" />
        لوازم مورد نیاز
      </div>
      <ul className=" flex flex-col gap-2 bg-neutral-white p-4 rounded-lg border border-gray-300 ">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-1">
            <span className="text-xl leading-4">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
