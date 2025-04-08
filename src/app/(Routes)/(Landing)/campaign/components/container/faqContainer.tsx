import React from "react";

export default function FaqContainer() {
  return (
    <div className="bg-white2 container py-10 md:py-[100px]">
      <div className=" flex flex-col md:bg-white md:flex-row">
        <div className="flex flex-col text-center md:text-start">
          <h6 className="text-base-lg font-bold text-black-900 lg:text-[32px]">
            FAQ
          </h6>
          <p className="text-2sm mt-2 font-bold text-black-900 lg:text-xl lg:mt-4">
            سوالات متداولی که از ما می‌پرسید
          </p>
          <p className="hidden text-2sm font-medium  md:block md:mt-[9px] text-secondary">
            سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا پاسخ داده شده
            اند:
          </p>
        </div>
        <div className="bg-blue-200">askdnsd</div>
      </div>
    </div>
  );
}
