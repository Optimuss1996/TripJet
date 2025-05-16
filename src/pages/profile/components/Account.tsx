import { useAuth } from "@/providers/AuthProvider";
import UserInfoSection from "./UserInfoSection";
import PassportInfoSection from "./PassportInfoSection";
import BankInfoSection from "./BankInfoSection";

export default function Account() {
  const { user, userProfile } = useAuth();
  console.log("userProfile", userProfile);
  console.log("user", user);
  return (
    <div className=" flex flex-col gap-6 w-full">
      {/* <UserInfoSection userProfile={userProfile!} />
      <PassportInfoSection userProfile={userProfile!} />
      <BankInfoSection userProfile={userProfile!} /> */}
    </div>
  );
}
