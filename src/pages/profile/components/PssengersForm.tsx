import Button from "@/components/common/Button";
import InputDatePicker from "@/components/common/InputDatePicker";
import InputForm from "@/components/common/InputForm";
import { useAuth } from "@/providers/AuthProvider";
import { useInsertPassengers } from "@/hooks/ReactQuery/usePssengers";
import { PassengerSchemaType, passengerSchema } from "@/utils/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import usePassengersModal from "@/store/usePassengersModal";
import { toast } from "sonner";
export default function PssengersForm() {
  const { user } = useAuth();
  const userId = user?.id;
  const { onClose } = usePassengersModal();
  const { mutate: createPassenger } = useInsertPassengers();

  const methods = useForm<PassengerSchemaType>({
    resolver: zodResolver(passengerSchema),
    defaultValues: {
      full_name: "",
      birth_date: "",
      national_code: "",
      user_id: userId,
    },
  });
  const onSubmit = (values: PassengerSchemaType) => {
    console.log("✅ SUBMITTED VALUES:", values);
    if (!userId) return;

    createPassenger(
      {
        full_name: values.full_name,
        birth_date: values.birth_date,
        national_code: values.national_code,
        user_id: userId,
      },
      {
        onSuccess: () => {
          methods.reset(values);
          onClose();
          toast.success("مسافر با موفقیت اضافه شد");
        },
        onError: (error) => {
          toast.error("خطایی رخ داده است");
          console.log(error.message);
        },
      }
    );
    console.log("📨 SUBMIT TRIGGERED"); // اضافه کن برای تست
  };

  return (
    <div className=" mt-6 min-h-[185px] w-11/12 mx-auto  rounded-lg p-2 lg:p-4 bg-neutral-white">
      <div>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className=" flex  flex-col gap-8 "
        >
          <Controller
            name="full_name"
            control={methods.control}
            render={({ field, fieldState }) => (
              <InputForm
                label="نام و نام خانوادگی"
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />

          <div className="flex md:items-center md:flex-row flex-col gap-8">
            <Controller
              name="national_code"
              control={methods.control}
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
            <Controller
              name="birth_date"
              control={methods.control}
              render={({ field, fieldState }) => (
                <InputDatePicker
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error?.message}
                />
              )}
            />
            <input
              type="hidden"
              value={userId}
              {...methods.register("user_id")}
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="px-3 py-2">
              افزودن مسافر
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
