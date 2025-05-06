import About from "./components/About";
import Banner from "./components/Banner";
import CategoryTours from "./components/CategoryTours";
import FindTour from "./components/FindTour";
import PopularTours from "./components/PopularTours";
import SpecialOffer from "./components/SpecialOffer";

export default function Home() {
  return (
    <main className=" w-full bg-neutral-50">
      <section>
        <Banner />
        <FindTour />
        <SpecialOffer />
        <About />
        <CategoryTours />
        <PopularTours />
      </section>
    </main>
  );
}
