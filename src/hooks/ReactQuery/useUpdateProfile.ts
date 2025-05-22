import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner"; // یا هر کتابخونه Toast دیگه
import { UserSchemaType } from "@/utils/userSchema";
import { supabase } from "@/lib/supabaseClient"; // مسیرش با پروژه‌ت سازگار باشه

const updateUserProfile = async (userId: string, values: UserSchemaType) => {
  const { error } = await supabase
    .from("users")
    .update(values)
    .eq("id", userId);

  if (error) throw new Error(error.message);
};

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
      values,
    }: {
      userId: string;
      values: UserSchemaType;
    }) => updateUserProfile(userId, values),

    onSuccess: () => {
      toast.success("اطلاعات با موفقیت بروزرسانی شد.");
      queryClient.invalidateQueries({ queryKey: ["users"] }); // یا ["users", userId]
    },

    onError: (error: any) => {
      toast.error("خطا در بروزرسانی اطلاعات: " + error.message);
    },
  });
};
