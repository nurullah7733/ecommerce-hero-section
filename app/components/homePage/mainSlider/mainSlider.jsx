"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./mainSlider.css";

const MainSlider = () => {
  return (
    <div className="main-slider">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {[1, 2, 3].map((item) => (
          <SwiperSlide key={item}>
            <Image
              width={1920}
              height={391}
              src="/assets/imgs/slide-banner.png"
              alt="slider img"
              className="w-full h-auto object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
