import JalaliDatePicker from "@/components/common/InputDatePicker";
import InputForm from "@/components/common/InputForm";

export default function Account() {
  return (
    <div>
      <div>
        <div className=" flex flex-col gap-7 w-full min-h-[185px] bg-neutral-white border border-neutral-400 rounded-lg px-3 py-2 ">
          <InputForm label="نام به فارسی" placeholder="نام خود را وارد کنید" />
          <JalaliDatePicker />
        </div>
        <div className=" w-full min-h-[185px] bg-neutral-white border border-neutral-400 rounded-lg px-3 py-2">
          sdvsvssvok
        </div>
        <div className=" w-full min-h-[185px] bg-neutral-white border border-neutral-400 rounded-lg px-3 py-2">
          sdvsvssvok
        </div>
        <div className=" w-full min-h-[185px] bg-neutral-white border border-neutral-400 rounded-lg px-3 py-2">
          sdvsvssvok
        </div>
      </div>
    </div>
  );
}
