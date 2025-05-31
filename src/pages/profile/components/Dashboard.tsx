import Button from "@/components/common/Button";
import UserMenu from "./UserMenu";
import UserProfile from "./UserProfile";
import { IoExitOutline } from "react-icons/io5";
import { Outlet, useNavigate } from "react-router";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";
// import { useAuth } from "@/providers/AuthProvider";

export default function Dashboard() {
  // const { session } = useAuth();
  const navigate = useNavigate();
  console.log("Dashboard rendered");

  async function handleLogOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error("خروج با خطا مواجه شد!");
      console.error(error.message);
    } else {
      toast.success(" خارج شدید ");
      navigate("/");
    }
  }

  return (
    <main className="md:px-10 lg:px-24 py-10">
      <section className=" flex items-start md:gap-3 lg:gap-5">
        <aside className="md:w-[220px] lg:w-[270px]  flex flex-col gap-5">
          <UserProfile />
          <UserMenu />
          <Button
            onClick={handleLogOut}
            className=" bg-error-100 text-error-500 px-6 py-4"
          >
            <div className=" flex justify-center items-center gap-1">
              <IoExitOutline className=" text-error-500  " size={24} />
              <span>خروج از حساب کاربری</span>
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
