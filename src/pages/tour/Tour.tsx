import TourGallery from "./components/TourGallery";

export default function Tour() {
  return (
    <main className="w-full bg-neutral-50">
      <TourGallery />
      <section className=" flex justify-center gap-5 w-full bg-neutral-50 mt-6 px-5 md:px-14 lg:px-[108px]"></section>
    </main>
  );
}
