"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "@/app/_components/card/card";
import { cards } from "./sliderList";
import { IconArrow } from "@/app/_components/icons/icons";

export default function Slider() {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative ">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 200,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 200,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 200,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Card
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className={`hidden bg-white absolute -right-4 top-1/2 -translate-y-1/2 chip !p-1 transition-colors z-10 md:block ${
          isBeginning ? "cursor-not-allowed" : ""
        }`}
        aria-label="Previous slide"
        disabled={isBeginning}
      >
        <IconArrow
          className={`w-6 h-6 ${
            isBeginning ? "fill-black-400" : "fill-black-900"
          }`}
          fill="none"
          viewBox="0 0 24 24"
        />
      </button>
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className={`hidden bg-white absolute -left-4 top-1/2 -translate-y-1/2 chip !p-1 transition-colors z-10 md:block ${
          isEnd ? "cursor-not-allowed" : ""
        }`}
        aria-label="Next slide"
        disabled={isEnd}
      >
        <IconArrow
          className={`w-6 h-6 rotate-180 ${
            isEnd ? "fill-black-400" : "fill-black-900"
          }`}
          fill="none"
          viewBox="0 0 24 24"
        />
      </button>
    </div>
  );
}
