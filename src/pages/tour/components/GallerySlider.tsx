import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ImageWithSkeleton } from "./ImageWithSkeleton";

interface ToursImages {
  images: string[];
}

export default function GallerySlider({ images }: ToursImages) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination]}
        className="mySwiper  h-64"
      >
        {images.map((image: string, index: number) => (
          <SwiperSlide key={index}>
            <ImageWithSkeleton src={image} alt={`Tour Image ${index + 1}`} />
          </SwiperSlide>
        ))}

        <div className="custom-pagination  mt-4 flex justify-center gap-2" />
      </Swiper>
    </>
  );
}
