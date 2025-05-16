import { useFetchLikedToursByUserId } from "@/hooks/ReactQuery/useLiked";
import { cn } from "@/lib/utils";
import { useAuth } from "@/providers/AuthProvider";
import { useState } from "react";
import LikedCard from "./LikedCard";

export default function WishList() {
  const [isInternational, setIsInternational] = useState<boolean>(false);
  const { user } = useAuth();
  const { data } = useFetchLikedToursByUserId(user?.id, isInternational);

  return (
    <div className="min-h-screen bg-neutral-white border border-neutral-400 rounded-lg p-4 lg:p-8">
      <h3 className=" text-neutral-text-900 text-titleSm mb-6">
        تورهایی که ذخیره کرده اید
      </h3>

      <div className=" flex items-center justify-start gap-3">
        <span
          onClick={() => setIsInternational(!isInternational)}
          className={cn(
            "text-labelSm lg:text-labelMd text-neutral-text-400 border border-neutral-400",
            "rounded-lg px-3 py-2 cursor-pointer hover:opacity-75 transition duration-300",
            isInternational || "text-primary bg-primary-100"
          )}
        >
          تور های داخلی
        </span>
        <span
          onClick={() => setIsInternational(!isInternational)}
          className={cn(
            "text-labelSm lg:text-labelMd text-neutral-text-400 border border-neutral-400",
            "rounded-lg px-3 py-2 cursor-pointer hover:opacity-75 transition duration-300",
            isInternational && "text-primary bg-primary-100"
          )}
        >
          تور های خارجی
        </span>
      </div>

      <div className="grid  grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-x-4 gap-y-8 mt-6">
        {data?.map((tour) => (
          <LikedCard tour={tour} key={tour.id} />
        ))}
      </div>
    </div>
  );
}
