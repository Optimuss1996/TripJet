import { useEffect, useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { useFetchUsersById } from "@/hooks/ReactQuery/useUsers";
import Spinner from "@/components/common/spinner";
import Button from "@/components/common/Button";
import UserInfoSection from "./UserInfoSection";
import PassportInfoSection from "./PassportInfoSection";
import BankInfoSection from "./BankInfoSection";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, UserSchemaType } from "@/utils/userSchema";

export default function Account() {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();
  const userId = user?.id;

  const { data, isLoading, isError } = useFetchUsersById(userId ?? "", {
    enabled: !!userId,
  });

  const methods = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      full_name: "",
      phone_number: "",
      birth_date: "",
      national_code: "",
      card_number: "",
      account_number: "",
      gender: "male",
    },
  });

  //🚨 Because the data is conditionally fetched, we can't use it directly in useForm for the default value, so we used useEffect.
  useEffect(() => {
    if (data) {
      methods.reset({
        full_name: data.full_name,
        phone_number: data.phone_number,
        birth_date: data.birth_date,
        national_code: data.national_code,
        card_number: data.card_number,
        account_number: data.account_number,
        gender: data.gender,
      });
    }
  }, [data, methods]);

  const onSubmit = (values: UserSchemaType) => {
    console.log("مقادیر نهایی فرم:", values);
  };

  if (!userId) return <div>ورود کاربر انجام نشده است</div>;
  if (isLoading) return <Spinner />;
  if (isError || !data) return <div>خطا در دریافت اطلاعات کاربر</div>;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full"
      >
        <UserInfoSection
          data={data}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <PassportInfoSection
          data={data}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <BankInfoSection
          data={data}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />

        {isEditing && (
          <div className="flex justify-end items-center gap-5 mt-3">
            <Button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-7 py-2 text-primary bg-neutral-white border border-primary"
            >
              انصراف
            </Button>
            <Button type="submit" className="px-7 py-2">
              ویرایش
            </Button>
          </div>
        )}
      </form>
    </FormProvider>
  );
}
