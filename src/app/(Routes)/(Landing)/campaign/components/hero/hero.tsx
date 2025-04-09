import Button from "@/app/_components/button/button";
import Motion from "@/app/_components/motion/motion";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-white2 w-full flex items-center justify-center">
      <div className="container py-10 md:py-0 bg-white2">
        <div className="bg-white rounded-t-base flex items-center flex-col md:bg-transparent md:items-start md:rounded-none md:flex-row md:justify-between">
          <div className="flex flex-col items-center pt-[10px] pb-10 text-center  md:pt-14 md:items-start lg:pt-20 md:text-start">
            <Motion
              initial={{ opacity: 0, x: 50 }} // Start from the right
              animate={{ opacity: 1, x: 0 }} // Move to the center
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-base-lg md:text-base-lg lg:text-xl text-black-900 font-bold">
                کمپین‌های بازاریابی و تبلیغاتی
              </h1>
            </Motion>
            <Motion
              initial={{ opacity: 0, x: 50 }} // Start from the right
              animate={{ opacity: 1, x: 0 }} // Move to the center
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm px-[16px] text-secondary max-w-[486px] font-semibold mt-3 md:px-0 md:text-sm lg:text-base-lg md:mt-4">
                آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره
                رایگان ما به شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین
                حالا قدم اول را بردارید!
              </p>
            </Motion>
            <Motion
              initial={{ opacity: 0, y: 50 }} // Start from the right
              animate={{ opacity: 1, y: 0 }} // Move to the center
              transition={{ duration: 0.567 }}
            >
              <p className="text-xs text-gray-7 font-bold mt-2 md:text-xs md:mt-2 lg:mt-3 lg:text-2sm">
                جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید
              </p>
            </Motion>
            <Motion
              initial={{ opacity: 0, y: 50 }} // Start from the right
              animate={{ opacity: 1, y: 0 }} // Move to the center
              transition={{ duration: 0.598, delay: 0.05 }}
            >
              <Button
                className="w-36 mt-4 text-sm lg:w-[141px] font-semibold md:mt-5 lg:mt-9 lg:text-base-lg"
                variant="primary"
              >
                دریافت مشاوره
              </Button>
            </Motion>
          </div>
          <div className="pt-6 rounded-t-base flex items-center w-full justify-center order-first md:w-auto md:pt-9 md:border-none md:order-none border-x border-t border-gray-1">
            <Image
              src="/images/hero.png"
              alt="Marketing campaign illustration"
              className="w-[300px] h-[221px] md:w-[457px] md:h-[300px] lg:w-[694px] lg:h-[480px]"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
