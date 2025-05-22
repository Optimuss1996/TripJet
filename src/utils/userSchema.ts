import { z } from "zod";

export const userSchema = z.object({
  full_name: z.string().min(3, "حداقل ۳ کاراکتر"),
  phone_number: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
  birth_date: z.string().min(10, "تاریخ تولد نامعتبر است"),
  national_code: z.string().regex(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد"),
  card_number: z.string().regex(/^\d{16}$/, "شماره کارت باید ۱۶ رقم باشد"),
  account_number: z.string().min(6, "شماره حساب معتبر نیست"),
  gender: z.enum(["male", "female"]),
});

// اگر می‌خوای ازش تایپ هم بگیری:
export type UserSchemaType = z.infer<typeof userSchema>;
