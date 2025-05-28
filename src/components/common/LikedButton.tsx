import { useAuth } from "@/providers/AuthProvider";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Tours } from "@/types/types";
import { cn } from "@/lib/utils";
import useAuthModal from "@/store/useAuthModal";
import {
  useInsertLikedTour,
  useRemoveLikedTour,
} from "@/hooks/ReactQuery/useLiked";
import { toast } from "sonner";

interface LikedButtonProps {
  tour: Tours;
}

export default function LikedButton({ tour }: LikedButtonProps) {
  const { user, session } = useAuth();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const authModal = useAuthModal();
  const { mutate } = useInsertLikedTour();
  const { mutate: removeMutation } = useRemoveLikedTour();

  // checking the existence of tour in the favorites table
  useEffect(() => {
    if (!user?.id) return;

    async function fetchData() {
      const { data, error } = await supabase
        .from("favorites")
        .select("*")
        .eq("user_id", user?.id)
        .eq("tour_id", tour.id)
        .single();

      if (data && !error) {
        setIsLiked(true);
      }
    }
    fetchData();
  }, [user?.id, tour.id]);

  const Icon = isLiked ? FaHeart : CiHeart;

  // insert liked tour in favorites table
  const handleReserveTour = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!session) {
      authModal.onOpen();
      return;
    }

    if (!isLiked) {
      mutate(
        {
          tourId: tour.id,
          userId: user?.id as string,
        },
        {
          onSuccess: () => {
            setIsLiked(true);
            toast.success("تور به علاقه مندی ها اضافه شد");
          },
          onError: () => toast.error("خطا در عملیات"),
        }
      );
    }
    if (isLiked) {
      removeMutation(
        {
          tourId: tour.id,
          userId: user?.id as string,
        },
        {
          onSuccess: () => {
            setIsLiked(false);
            toast.success("تور از علاقه مندی ها حذف شد");
          },
          onError: () => toast.error("خطا در عملیات"),
        }
      );
    }
  };

  return (
    <span
      onClick={handleReserveTour}
      className={cn(
        "absolute p-1 top-2 right-2 rounded-md cursor-pointer",
        "hover:opacity-60 transition duration-300",
        isLiked ? "bg-primary-50 p-1" : "bg-primary"
      )}
    >
      <Icon
        className={cn("", isLiked ? "text-primary" : "text-primary-50")}
        size={20}
      />
    </span>
  );
}
