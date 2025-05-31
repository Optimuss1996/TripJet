// import { useIsMobileBreakpoint } from "@/hooks/isMobileBreakpoint";
import Dashboard from "./components/Dashboard";
// import DashboardMobile from "./components/DashboardMobile";

export default function Profile() {
  // const isMobile = useIsMobileBreakpoint(768);
  return (
    <main className=" w-full bg-neutral-50  min-h-screen">
      {/* {isMobile ? <DashboardMobile /> : <Dashboard />} */}
      <Dashboard />
    </main>
  );
}
