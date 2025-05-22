import { Controller, useFormContext } from "react-hook-form";
import InputForm from "@/components/common/InputForm";
import { UserSchemaType } from "@/utils/userSchema";
import { BiEdit } from "react-icons/bi";
import { RadioGenderUser } from "./RadioGenderUser";
import { convertEnToFaNumbers } from "@/utils/Commonconvert";
import { Users } from "@/types/types";
import { useEffect } from "react";

interface UserProfileProps {
  data: Users;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UserInfoSection({
  data,
  isEditing,
  setIsEditing,
}: UserProfileProps) {
  const { control, reset } = useFormContext<UserSchemaType>();

  // اگر data از سرور آپدیت شد، فرم ریست میشه
  useEffect(() => {
    reset({
      full_name: data.full_name,
      phone_number: data.phone_number,
      birth_date: data.birth_date,
      national_code: data.national_code,
      card_number: data.card_number,
      account_number: data.account_number,
      gender: data.gender,
    });
  }, [data, reset]);

  return (
    <main>
      <div className="min-h-[185px] bg-neutral-white border border-neutral-400 rounded-lg p-3 lg:p-6 ">
        <div className=" flex items-center justify-between mb-6">
          <p className="md:text-labelLg lg:text-titleSm">اطلاعات کاربری</p>
          {!isEditing && (
            <div
              onClick={() => setIsEditing(true)}
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
              name="gender"
              control={control}
              render={({ field }) => (
                <RadioGenderUser
                  value={field.value}
                  onValueChange={field.onChange}
                />
              )}
            />

            <Controller
              name="full_name"
              control={control}
              render={({ field, fieldState }) => (
                <InputForm
                  label="نام و نام خانوادگی"
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="phone_number"
              control={control}
              render={({ field, fieldState }) => (
                <InputForm
                  label="تلفن همراه"
                  value={field.value}
                  onChange={field.onChange}
                  isNumeric
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className=" flex items-center justify-start gap-8">
              <p className="text-neutral-text-900 text-labelLg">
                نام و نام خانوادگی
              </p>
              <p className="text-neutral-text-400 text-labelLg">
                {data.full_name}
              </p>
            </div>
            <div className=" flex items-center justify-start gap-8">
              <p className="text-neutral-text-900 text-labelLg">شماره موبایل</p>
              <p className="text-neutral-text-400 text-labelLg">
                {convertEnToFaNumbers(data.phone_number)}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
