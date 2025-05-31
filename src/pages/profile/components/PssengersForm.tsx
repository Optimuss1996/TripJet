import InputDatePicker from "@/components/common/InputDatePicker";
import InputForm from "@/components/common/InputForm";

// 🚨passengers form🚨 //
export default function PssengersForm() {
  return (
    <div className=" mt-6 min-h-[185px] w-11/12 mx-auto  border border-neutral-400 rounded-lg p-3 lg:p-6 bg-neutral-white">
      <h3 className="flex justify-start items-center  px-5 py-2 text-labelLg md:text-titleSm my-4 text-primary  rounded-lg">
        مسافر یک - سرپرست :
      </h3>

      <div className=" flex  flex-col gap-8 ">
        <InputForm label="نام و نام خانوادگی" />
        <div className="flex md:items-center md:flex-row flex-col gap-8">
          <InputForm label="کد ملی" />
          <InputDatePicker onChange={() => {}} />
        </div>
      </div>
    </div>
  );
}
