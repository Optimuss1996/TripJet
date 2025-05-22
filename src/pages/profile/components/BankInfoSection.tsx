import InputForm from "@/components/common/InputForm";
import { Users } from "@/types/types";
import { convertEnToFaNumbers } from "@/utils/Commonconvert";
import { UserSchemaType } from "@/utils/userSchema";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { BiEdit } from "react-icons/bi";

interface UserProfileProps {
  data: Users;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function BankInfoSection({
  data,
  isEditing,
  setIsEditing,
}: UserProfileProps) {
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
        <div className=" flex items-center justify-between mb-6 ">
          <p className="md:text-labelLg lg:text-titleSm">اطلاعات بانکی</p>

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
        {/* when edit state is true */}
        {isEditing ? (
          <div className="flex flex-col gap-6">
            <Controller
              name="card_number"
              control={control}
              render={({ field, fieldState }) => (
                <InputForm
                  label="شماره کارت"
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error?.message}
                  isNumeric
                />
              )}
            />
            <Controller
              name="account_number"
              control={control}
              render={({ field, fieldState }) => (
                <InputForm
                  label=" شماره حساب"
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
              <p className="text-neutral-text-900 text-labelLg">شماره کارت</p>
              <p className="text-neutral-text-400 text-labelLg">
                {convertEnToFaNumbers(data.card_number)}
              </p>
            </div>
            <div className=" flex items-center justify-start gap-8">
              <p className="text-neutral-text-900 text-labelLg"> شماره حساب</p>
              <p className="text-neutral-text-400 text-labelLg">
                {convertEnToFaNumbers(data.account_number)}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
