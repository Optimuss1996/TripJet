import GalleryGrid from "./GalleryGrid";
import GallerySlider from "./GallerySlider";

interface TourGalleryProps {
  tourImages: string[];
}

export default function TourGallery({ tourImages }: TourGalleryProps) {
  return (
    <main className=" w-full bg-neutral-50 px-5 md:px-14 lg:px-[108px] my-5">
      {/* for md screen and grater than */}
      <div className=" hidden md:block">
        <GalleryGrid images={tourImages} />
      </div>
      <div className=" block md:hidden">
        <GallerySlider images={tourImages} />
      </div>
    </main>
  );
}
