import { useAuth } from "@/providers/AuthProvider";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeartbeat } from "react-icons/fa";
import { Tours } from "@/types/types";
import { cn } from "@/lib/utils";
import useAuthModal from "@/store/useAuthModal";

interface LikedButtonProps {
  tour: Tours;
}

export default function LikedButton({ tour }: LikedButtonProps) {
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const authModal = useAuthModal();
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

  const Icon = isLiked ? FaHeartbeat : CiHeart;
  async function handleClick() {
    if (!user) {
      return authModal.onOpen();
    }
  }
  return (
    <span
      onClick={handleClick}
      className={cn(
        "absolute p-1 top-2 right-2 rounded-md cursor-pointer",
        "hover:opacity-60 transition duration-300",
        isLiked ? "bg-primary-50" : "bg-primary"
      )}
    >
      <Icon
        className={cn("", isLiked ? "text-primary" : "text-primary-50")}
        size={20}
      />
    </span>
  );
}
