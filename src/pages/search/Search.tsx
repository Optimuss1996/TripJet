import Banner from "../home/components/Banner";
import FindTour from "../home/components/FindTour";
import Tours from "./components/Tours";

export default function Search() {
  return (
    <main className=" w-full bg-neutral-50 pb-20">
      <Banner />
      <FindTour />
      <Tours />
    </main>
  );
}
