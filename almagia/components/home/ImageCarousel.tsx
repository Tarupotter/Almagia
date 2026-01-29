"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = ["/lokal.jpeg", "/Meditate.png", "/SaraMeditation.jpg"];

export default function ImageCarousel() {
  return (
    <Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={16}
  slidesPerView={1}
  style={
    {
      "--swiper-navigation-color": "#c7b8a5",
      "--swiper-pagination-color": "#c7b8a5",
    } as React.CSSProperties
  }
>
      {images.map((src) => (
        <SwiperSlide key={src}>
          <img
            src={src}
            alt="pictures"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
