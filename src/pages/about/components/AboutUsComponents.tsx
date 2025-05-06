import { useState } from "react";
import { PiBookOpenText } from "react-icons/pi";

export default function AboutUsComponents() {
  const [active, setActive] = useState<"right" | "left">("right");

  return (
    <main className=" px-24 ">
      <section className=" flex  justify-start   text-neutral-text-500 ">
        <p
          onClick={() => setActive("right")}
          className={`border-b-2 pb-1  cursor-pointer   ${
            active === "right"
              ? "text-primary border-b-[3px] border-b-primary"
              : ""
          } px-3 border-b-neutral-400`}
        >
          درباره ما
        </p>
        <p
          onClick={() => setActive("left")}
          className={`border-b-2 pb-1  cursor-pointer  ${
            active === "left"
              ? "text-primary border-b-[3px] border-b-primary"
              : ""
          } px-3 border-b-neutral-400`}
        >
          تماس با ما
        </p>
      </section>
      <section className="py-12 flex items-center justify-between gap-6">
        <div className=" flex-1">
          <div className=" flex items-center justify-start gap-2">
            <PiBookOpenText className=" text-primary" size={20} />
            <span className=" text-bodyMd text-neutral-black font-semibold">
              داستان ما
            </span>
          </div>
          <p className=" leading-8 mt-3 text-neutral-text-500">
            "سفر، همیشه بخش مهمی از زندگی ما بوده است. از همان روزهای کودکی که
            اولین ماجراجویی‌هایمان را با خانواده تجربه کردیم، رویای کشف دنیا در
            ذهنمان شکل گرفت. این اشتیاق به سفر، ما را به این باور رساند که هر
            سفر می‌تواند فراتر از یک تجربه عادی باشد؛ فرصتی برای شناخت فرهنگ‌ها،
            ایجاد خاطرات ناب و ارتباط با انسان‌های متفاوت.
            <br />
            <br />
            سال‌ها پیش، وقتی برای اولین بار یک تور کوچک را با چند دوست ترتیب
            دادیم، متوجه شدیم که می‌توانیم به دیگران هم کمک کنیم تا دنیای
            اطرافشان را کشف کنند. همین ماجراجویی ساده، تبدیل به پایه‌ای برای
            تأسیس شرکت مسافرتی ما شد. با عشق به کشف و خلق تجربیات جدید، ما تصمیم
            گرفتیم که به مردم کمک کنیم تا سفرهایشان را به بهترین شکل ممکن
            برنامه‌ریزی کنند.
            <br />
            <br />
            امروز، با تیمی از کارشناسان مجرب و پرشور، ما افتخار می‌کنیم که هر
            روز به هزاران نفر کمک می‌کنیم تا به مقصدهای رویایی خود سفر کنند. هدف
            ما فقط ارائه تور نیست؛ ما در کنار شما هستیم تا هر لحظه از سفرتان را
            تبدیل به خاطره‌ای شیرین کنیم."
          </p>
        </div>
        <div>
          <img src="/aboutUsPage/tourism-day.webp" alt="" />
        </div>
      </section>
    </main>
  );
}
