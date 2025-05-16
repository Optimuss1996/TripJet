import { Users } from "@/types/types";
import { convertEnToFaNumbers } from "@/utils/Commonconvert";
// import { useState } from "react";
import { BiEdit } from "react-icons/bi";

interface UserProfileProps {
  userProfile: Users;
}

export default function UserInfoSection({ userProfile }: UserProfileProps) {
  // const [isEditing, setIsEditing] = useState<boolean>(false);
  return (
    <main>
      <div className="min-h-[185px] bg-neutral-white border border-neutral-400 rounded-lg p-3 lg:p-6 ">
        <div className=" flex items-center justify-between mb-6">
          <p className="md:text-labelLg lg:text-titleSm">اطلاعات کاربری</p>

          <div className=" flex items-center gap-1">
            <p className="text-primary text-labelMd lg:text-labelLg">
              ویرایش اطلاعات
            </p>
            <BiEdit className="text-primary" size={20} />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className=" flex items-center justify-start gap-8">
            <p className="text-neutral-text-900 text-labelLg">
              نام و نام خانوادگی
            </p>
            <p className="text-neutral-text-400 text-labelLg">
              {userProfile.full_name}{" "}
            </p>
          </div>
          <div className=" flex items-center justify-start gap-8">
            <p className="text-neutral-text-900 text-labelLg">شماره موبایل</p>
            <p className="text-neutral-text-400 text-labelLg">
              {convertEnToFaNumbers(userProfile.phone_number)}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
