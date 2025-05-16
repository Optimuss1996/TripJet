import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Tours } from "@/types/types";
import CardPopular from "./CardPopular";

interface ToursProps {
  tours: Tours[] | undefined;
}

export default function SliderPopularTours({ tours }: ToursProps) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper relative"
      >
        {tours?.map((tour) => (
          <SwiperSlide key={tour.id}>
            <CardPopular tour={tour} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
