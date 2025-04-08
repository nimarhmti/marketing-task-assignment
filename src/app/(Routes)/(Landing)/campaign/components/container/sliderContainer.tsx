import React from "react";
import Slider from "../slider/slider";

export default function SliderContainer() {
  return (
    <div className="h-[430px] pt-10 w-full md:pt-[60px]">
      <div className="bg-gradient-primary relative h-60 flex flex-col items-center pt-6">
        <h4 className="text-white text-base-lg font-bold md:text-lg">
          موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها
        </h4>
        <div className="container absolute top-[84px]">
          <Slider />
        </div>
      </div>
    </div>
  );
}
