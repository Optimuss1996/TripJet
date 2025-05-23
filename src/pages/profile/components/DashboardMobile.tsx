import UserProfile from "./UserProfile";

export default function DashboardMobile() {
  return (
    <div className=" p-3">
      <h1 className=" text-labelLg text-neutral-text-900 mb-5">حساب کاربری</h1>
      <UserProfile />
    </div>
  );
}
