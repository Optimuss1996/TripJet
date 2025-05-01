import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex flex-col overflow-y-auto overflow-x-hidden   ">
      <Header />
      <main className=" min-h-screen  ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
