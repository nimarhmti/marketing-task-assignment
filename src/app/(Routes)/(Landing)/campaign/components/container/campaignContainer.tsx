import React from "react";
import Hero from "../hero/hero";
import Slider from "../slider/slider";
import SliderContainer from "./sliderContainer";

export default function CampaignContainer() {
  return (
    <div className="bg-white2 flex items-center flex-col justify-center">
      <Hero />
      <SliderContainer />
    </div>
  );
}
