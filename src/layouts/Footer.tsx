import { FiInstagram } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { TbBrandLinkedin } from "react-icons/tb";

export default function Footer() {
  return (
    <main className=" bg-neutral-white w-full min-h-[460px] px-6 lg:px-20 text-bodySm">
      <section className=" flex flex-col lg:flex-row items-center justify-between gap-y-10 py-8  ">
        <div className="  flex justify-start w-full lg:w-auto px-6">
          <div className=" flex flex-col gap-5 text-neutral-text-500 ">
            <img
              src="/logo/Logo.svg"
              alt="LogoTripJet"
              className="w-32 lg:w-40"
            />
            <p>تلفن پشتیبانی : ۰۲۱۳۳۴۸۹۸۰۷</p>
            <p>آدرس دفتر مرکزی : تهران، سعادت آباد، خیابان کاج، پلاک ۱۶</p>
            <p>آدرس ایمیل : tripjet@gmail.com</p>
          </div>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
          <div className=" flex flex-col gap-4 text-neutral-text-500">
            <h4 className=" text-neutral-text-900">تریپ جت</h4>
            <p>درباره ما</p>
            <p>تماس با ما</p>
            <p>شرایط و قوانین</p>
            <p>سوالات متداول</p>
          </div>
          <div className=" flex flex-col gap-4 text-neutral-text-500">
            <h4 className=" text-neutral-text-900">خدمات مشتریان</h4>
            <p>راهنمای خرید</p>
            <p>قوانین و مقررات</p>
            <p>راهنمای استرداد</p>
            <p>مرکز پشتیبانی آنلاین</p>
          </div>
          <div className=" flex flex-col gap-4 text-neutral-text-500">
            <h4 className=" text-neutral-text-900"> تور های پرطرفدار</h4>
            <p>تور دبی</p>
            <p>تور کیش</p>
            <p>تور آنتالیا</p>
            <p>تور استانبول</p>
          </div>
          <div className=" flex flex-col gap-4 text-neutral-text-500">
            <h4 className=" text-neutral-text-900"> اطلاعات تکمیلی</h4>
            <p>فروش سازمانی</p>
            <p>فرصت‌های شغلی</p>
            <p>سنجش رضایتمندی</p>
            <p>همکاری با آژانس ها</p>
          </div>
        </div>
      </section>

      <section className=" flex flex-col lg:flex-row justify-between items-center gap-y-10 py-8">
        <div className=" flex gap-4">
          <MdOutlineEmail className=" text-primary  " size={30} />
          <TbBrandLinkedin className=" text-primary " size={30} />
          <FiInstagram className="text-primary " size={30} />
          <PiWhatsappLogoLight className=" text-primary " size={30} />
          <LiaTelegram className=" text-primary " size={30} />
        </div>
        <div className=" flex items-center gap-2">
          <img src="/footer/Frame 1171276802.svg" alt="logo" />
          <img src="/footer/Frame 1430103785.svg" alt="logo" />
          <img src="/footer/Frame 1430103786.svg" alt="logo" />
          <img src="/footer/Frame 1430103787.svg" alt="logo" />
        </div>
      </section>

      <section className=" flex justify-center items-center w-full h-20 text-neutral-text-400 py-5 border-t border-neutral-400 ">
        <p>تمامی حقوق این وبگاه محفوظ و مربوط به آژانس مسافرتی تریپ جت است.</p>
      </section>
    </main>
  );
}
