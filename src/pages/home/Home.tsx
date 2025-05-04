import Banner from "./components/Banner";
import FindTour from "./components/FindTour";
import SpecialOffer from "./components/SpecialOffer";

export default function Home() {
  return (
    <main className=" w-full bg-neutral-50">
      <section>
        <Banner />
        <FindTour />
        <SpecialOffer />
      </section>
    </main>
  );
}
