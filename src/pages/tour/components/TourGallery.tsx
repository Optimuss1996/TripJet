import GalleryGrid from "./GalleryGrid";
import GallerySlider from "./GallerySlider";

export default function TourGallery() {
  return (
    <main className=" w-full bg-neutral-50 px-5 md:px-14 lg:px-[108px] my-5">
      {/* for md screen and grater than */}
      <div className=" hidden md:block">
        <GalleryGrid />
      </div>
      <div className=" block md:hidden">
        <GallerySlider />
      </div>
    </main>
  );
}
