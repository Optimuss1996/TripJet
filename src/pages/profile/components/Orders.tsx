import { IoIosArrowBack } from "react-icons/io";

export default function Orders() {
  return (
    <main className="bg-neutral-white border border-neutral-400 rounded-lg p-4 lg:p-8">
      <h3 className=" text-neutral-text-900 text-titleSm mb-6">
        تورهای رزرو شده
      </h3>

      <div className=" p-3 lg:p-4 flex items-center justify-between">
        <div className=" flex  items-center  lg:justify-between gap-5">
          <img
            src="/amsterdam-2.webp"
            alt="image"
            className=" object-cover object-center w-16 h-16 xl:w-20 xl:h-20 rounded-lg"
          />

          <div className="flex flex-col lg:flex-row  lg:items-center lg:justify-between  gap-2 lg:gap-6  xl:gap-10">
            <p className=" text-neutral-text-900 font-semibold text-bodySm xl:text-bodyLg">
              تور سوادکوه
            </p>

            <div className=" flex items-center justify-between gap-3">
              <p className="flex items-center gap-1">
                <span className=" text-primary text-bodySm xl:text-bodyMd">
                  ۳۵,۰۰۰,۰۰۰
                </span>
                <span className=" text-labelSm text-neutral-text-400">
                  تومان
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-between gap-3">
          <p className=" text-primary text-labelSm border border-primary rounded-[16px] px-2 py-1">
            در حال بررسی
          </p>

          <div className="flex items-center justify-between gap-1">
            <p className=" text-primary text-labelSm cursor-pointer hover:opacity-70 transition duration-300">
              مشاهده جزییات
            </p>
            <IoIosArrowBack className="text-primary " size={20} />
          </div>
        </div>
      </div>
    </main>
  );
}
