import { Users } from "@/types/types";
import {
  convertEnToFaNumbers,
  convertGregorianToPersianWithNumbers,
} from "@/utils/Commonconvert";
// import { useState } from "react";
import { BiEdit } from "react-icons/bi";
interface UserProfileProps {
  userProfile: Users;
}
export default function PassportInfoSection({ userProfile }: UserProfileProps) {
  //   const [isEditing, setIsEditing] = useState<boolean>(false);
  const startDate = convertGregorianToPersianWithNumbers(
    userProfile.birth_date
  );

  return (
    <main>
      <div className="min-h-[185px] bg-neutral-white border border-neutral-400 rounded-lg p-3 lg:p-6 ">
        <div className=" flex items-center justify-between mb-6">
          <p className="md:text-labelLg lg:text-titleSm"> اطلاعات مسافرتی</p>

          <div className=" flex items-center gap-1">
            <p className="text-primary text-labelMd lg:text-labelLg">
              ویرایش اطلاعات
            </p>
            <BiEdit className="text-primary" size={20} />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className=" flex items-center justify-start gap-8">
            <p className="text-neutral-text-900 text-labelLg">تاریخ تولد</p>
            <p className="text-neutral-text-400 text-labelLg">
              {startDate.year}
              {startDate.monthName}
              {startDate.day}
            </p>
          </div>
          <div className=" flex items-center justify-start gap-8">
            <p className="text-neutral-text-900 text-labelLg"> کد ملی</p>
            <p className="text-neutral-text-400 text-labelLg">
              {convertEnToFaNumbers(userProfile.national_code)}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
