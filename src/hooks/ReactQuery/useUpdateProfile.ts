import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { UserSchemaType } from "@/utils/userSchema";
import { updateUserProfile } from "@/service/data-service";

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
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toast.error("خطا در بروزرسانی اطلاعات: " + error.message);
    },
  });
};
