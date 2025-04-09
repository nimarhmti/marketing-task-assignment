import React from "react";
import Slider from "../slider/slider";
import Motion from "@/app/_components/motion/motion";

export default function SliderContainer() {
  return (
    <div className="h-[430px] pt-10 w-full md:pt-[60px] ">
      <div className="bg-gradient-primary relative h-60 flex flex-col items-center pt-6">
        <Motion
          initial={{ opacity: 0, x: 20 }} // Start from the right
          animate={{ opacity: 1, x: 0 }} // Move to the center
          transition={{ duration: 0.567 }}
        >
          <h4 className="text-white text-base-lg font-bold md:text-lg text-center">
            موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها
          </h4>
        </Motion>
        <div className="container absolute top-[111px] md:top-[84px]">
          <Motion
            initial={{ scale: 0.4 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.346, ease: "easeOut" }}
          >
            <Slider />
          </Motion>
        </div>
      </div>
    </div>
  );
}
