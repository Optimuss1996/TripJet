import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function GallerySlider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination]}
        className="mySwiper  h-48"
      >
        <SwiperSlide>
          <img
            src="/amsterdam-2.webp"
            alt="Amsterdam"
            className=" w-full h-full object-cover object-center rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/amsterdam-2.webp"
            alt="Amsterdam"
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/amsterdam-2.webp"
            alt="Amsterdam"
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/amsterdam-2.webp"
            alt="Amsterdam"
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </SwiperSlide>
        <div className="custom-pagination mt-4 flex justify-center gap-2" />
      </Swiper>
    </>
  );
}
