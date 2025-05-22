import Button from "@/components/common/Button";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";
import { IoExitOutline } from "react-icons/io5";
import { Outlet } from "react-router";
export default function Dashboard() {
  return (
    <main className="md:px-10 lg:px-24 py-10">
      <section className=" flex items-start md:gap-3 lg:gap-5">
        <aside className="md:w-[220px] lg:w-[270px]  flex flex-col gap-5">
          <UserProfile />
          <UserMenu />
          <Button className=" bg-error-100 text-error-500 px-6 py-4">
            <div className=" flex justify-center items-center gap-1">
              <IoExitOutline className=" text-error-500  " size={24} />
              <span>خرید از حساب کاربری</span>
            </div>
          </Button>
        </aside>

        <main className=" flex-1 ">
          <Outlet />
        </main>
      </section>
    </main>
  );
}
