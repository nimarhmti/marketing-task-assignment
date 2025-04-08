import React from "react";
import Hero from "../hero/hero";
import Slider from "../slider/slider";
import SliderContainer from "./sliderContainer";
import FormContainer from "./formContainer";
import FaqContainer from "./faqContainer";

export default function CampaignContainer() {
  return (
    <div className="flex items-center flex-col justify-center">
      <Hero />
      <SliderContainer />
      <FormContainer />
      <FaqContainer />
    </div>
  );
}
