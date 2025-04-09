import React from "react";
import Form from "../form/form";
import Motion from "@/app/_components/motion/motion";

export default function FormContainer() {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="container py-10 md:py-[60px] flex flex-col items-center ">
        <Motion
          initial={{ opacity: 0, x: 50 }} // Start from the right
          animate={{ opacity: 1, x: 0 }} // Move to the center
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-center text-base-lg font-bold text-black-900 md:text-lg">
            فرم دریافت مشاوره
          </h4>
          <p className="text-center text-black-500 text-sm mt-4 mb-8 md:mt-6 md:mb-4">
            برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل
            کنید تا مشاوران ما به صورت کاملان رایگان شمارا راهنمایی کنند.
          </p>
        </Motion>
        <Motion
          initial={{ scale: 0.4 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.546, ease: "easeOut" }}
        >
          <Form />
        </Motion>
      </div>
    </div>
  );
}
