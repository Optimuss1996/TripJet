import { ImageWithSkeleton } from "./ImageWithSkeleton";

interface TourImagesProps {
  images: string[];
}

export default function GalleryGrid({ images }: TourImagesProps) {
  return (
    <div className=" w-full md:h-[450px] lg:h-[500px] grid grid-cols-4 grid-rows-2 gap-4 rounded-lg">
      <div className="col-span-2 row-span-2  rounded-lg h-full">
        <ImageWithSkeleton src={images[0]} alt="image" />
      </div>
      <div className="col-span-2 col-start-3 row-start-2  rounded-lg  h-full">
        <ImageWithSkeleton src={images[1]} alt="image" />
      </div>
      <div className="col-start-3 row-start-1   rounded-lg h-full">
        <ImageWithSkeleton src={images[2]} alt="image" />
      </div>
      <div className="col-start-4 row-start-1  rounded-lg h-full">
        <ImageWithSkeleton src={images[3]} alt="image" />
      </div>
    </div>
  );
}
