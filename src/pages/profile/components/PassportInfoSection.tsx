import InputDatePicker from "@/components/common/InputDatePicker";
import InputForm from "@/components/common/InputForm";
import { Users } from "@/types/types";
import {
  convertEnToFaNumbers,
  convertGregorianToPersianWithNumbers,
} from "@/utils/Commonconvert";
import { UserSchemaType } from "@/utils/userSchema";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { BiEdit } from "react-icons/bi";
interface UserProfileProps {
  data: Users;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function PassportInfoSection({
  data,
  isEditing,
  setIsEditing,
}: UserProfileProps) {
  const startDate = convertGregorianToPersianWithNumbers(data.birth_date);
  const { control, reset } = useFormContext<UserSchemaType>();

  // if data from server updated , this useEffects run and then set new value to form value
  useEffect(() => {
    reset({
      full_name: data.full_name,
      phone_number: data.phone_number,
      birth_date: data.birth_date,
      national_code: data.national_code,
      card_number: data.card_number,
      account_number: data.account_number,
    });
  }, [data, reset]);

  return (
    <main>
      <div className="min-h-[185px] bg-neutral-white border border-neutral-400 rounded-lg p-3 lg:p-6 ">
        <div className=" flex items-center justify-between mb-6">
          <p className="md:text-labelLg lg:text-titleSm"> اطلاعات مسافرتی</p>
          {!isEditing && (
            <div
              onClick={() => setIsEditing(!isEditing)}
              className=" flex items-center gap-1 cursor-pointer hover:opacity-70 transition duration-300"
            >
              <p className="text-primary text-labelMd lg:text-labelLg">
                ویرایش اطلاعات
              </p>
              <BiEdit className="text-primary" size={20} />
            </div>
          )}
        </div>

        {isEditing ? (
          <div className="flex flex-col gap-6">
            <Controller
              name="birth_date"
              control={control}
              render={({ field, fieldState }) => (
                <InputDatePicker
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="national_code"
              control={control}
              render={({ field, fieldState }) => (
                <InputForm
                  label="کد ملی"
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error?.message}
                  isNumeric
                />
              )}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className=" flex items-center justify-start gap-8">
              <p className="text-neutral-text-900 text-labelLg">تاریخ تولد</p>
              <p className="text-neutral-text-400 text-labelLg flex items-center gap-1">
                <span>{startDate.day}</span>
                <span>{startDate.monthName}</span>
                <span>{startDate.year}</span>
              </p>
            </div>
            <div className=" flex items-center justify-start gap-8">
              <p className="text-neutral-text-900 text-labelLg"> کد ملی</p>
              <p className="text-neutral-text-400 text-labelLg">
                {convertEnToFaNumbers(data.national_code)}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
