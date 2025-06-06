import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useFetchUsersById } from "@/hooks/ReactQuery/useUsers";
import { useAuth } from "@/providers/AuthProvider";
import useProfileModalMobile from "@/store/useProfileMobileModal";
import { convertEnToFaNumbers } from "@/utils/Commonconvert";
import { BiEdit } from "react-icons/bi";
import { RiUserLine } from "react-icons/ri";

export default function UserProfile() {
  const { user } = useAuth();
  const { onOpen } = useProfileModalMobile();
  const userId = user?.id;
  const { data } = useFetchUsersById(userId || "", {
    enabled: !!userId,
  });

  console.log("UserProfile rendered");

  return (
    <div className=" flex items-center justify-between md:justify-around gap-1 bg-neutral-white border border-neutral-400 rounded-lg px-3 py-4">
      <Avatar>
        <AvatarImage
          className=""
          src={data?.avatar_url || "https://github.com/shadcn.png"}
          alt="@shadcn"
        />
        <AvatarFallback>
          <RiUserLine className="text-primary" />
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col sm:flex-row md:flex-col justify-center items-center gap-2 sm:gap-8 md:gap-2 text-labelLg">
        <p>{data?.full_name}</p>
        <p className="text-neutral-text-400 text-labelMd">
          {convertEnToFaNumbers(data?.phone_number as string)}
        </p>
      </div>

      <BiEdit onClick={onOpen} className=" text-primary opacity-80" size={24} />
    </div>
  );
}
