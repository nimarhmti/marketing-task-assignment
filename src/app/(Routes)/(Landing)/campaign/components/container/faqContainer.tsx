"use client";
import Accordion from "@/app/_components/accordion/accordion";
import Motion from "@/app/_components/motion/motion";
import React from "react";

const faqItems = [
  {
    id: "f0d1c2a1-1234-4e6b-8a77-b8a9d63b1a01",
    title: "مراحل طراحی وب سایت چیست؟",
    description:
      "خدمات دیجیتال مارکتینگ شامل استراتژی‌های مختلفی مانند سئو، تبلیغات آنلاین، تولید محتوا، و مدیریت شبکه‌های اجتماعی می‌شود. این خدمات به کسب‌وکارها کمک می‌کنند تا حضور آنلاین خود را تقویت کنند و به مشتریان بیشتری دست یابند.",
  },
  {
    id: "a3b5f6e2-5678-4c0a-9e22-d1bc2f0b3c44",
    title: "چرا طراحی وب سایت مهم است؟",
    description:
      "برای استفاده از خدمات ما، کافی است با تیم ما تماس بگیرید. ما پس از بررسی نیازهای شما، یک استراتژی مناسب طراحی می‌کنیم و خدمات مورد نیاز را به شما ارائه می‌دهیم. همچنین می‌توانید از طریق فرم درخواست مشاوره، با ما در ارتباط باشید.",
  },
  {
    id: "c7d8e9f3-9101-4d8c-ace3-e23456a7b089",
    title: "چگونه یک وب سایت را بهینه کنیم؟",
    description:
      "هزینه خدمات دیجیتال مارکتینگ بسته به نوع خدمات، حجم کار و نیازهای خاص هر کسب‌وکار متفاوت است. ما پس از بررسی دقیق نیازهای شما، یک پیشنهاد قیمت مناسب ارائه می‌دهیم که متناسب با بودجه و اهداف شما باشد.",
  },
  {
    id: "b2a6-c1,f4-2345-4ec2-a7c9-a890de32f4cc",
    title: "راهکارهای جذب ترافیک وب سایت چیست؟",
    description:
      "مدت زمان مشاهده نتایج بستگی به نوع خدمات و استراتژی‌های به کار گرفته شده دارد. برخی از نتایج مانند افزایش ترافیک وب‌سایت ممکن است در کوتاه‌مدت قابل مشاهده باشند، در حالی که نتایج دیگر مانند بهبود رتبه سئو ممکن است به زمان بیشتری نیاز داشته باشند.",
  },
  {
    id: "d4e5f6a7-3456-4b8e-b1f0-c0ffee12abcd",
    title: "چطور ارزیابی امنیت وب سایت انجام دهیم؟",
    description:
      "مدت زمان مشاهده نتایج بستگی به نوع خدمات و استراتژی‌های به کار گرفته شده دارد. برخی از نتایج مانند افزایش ترافیک وب‌سایت ممکن است در کوتاه‌مدت قابل مشاهده باشند، در حالی که نتایج دیگر مانند بهبود رتبه سئو ممکن است به زمان بیشتری نیاز داشته باشند.",
  },
];

export default function FaqContainer() {
  return (
    <div className="bg-white2 w-full flex items-center justify-center">
      <div className=" container py-10 md:py-[100px]">
        <div className="bg-transparent flex flex-col gap-6 md:bg-white md:flex-row md:px-5 md:py-10 lg:px-10 lg:py-20">
          <div className="flex flex-col text-center md:text-start ">
            <Motion
              initial={{ opacity: 0, y: -50 }} // Start from the right
              animate={{ opacity: 1, y: 0 }} // Move to the center
              transition={{ duration: 0.289 }}
            >
              <h6 className="text-base-lg font-bold text-black-900 lg:text-[32px]">
                FAQ
              </h6>
            </Motion>
            <Motion
              initial={{ opacity: 0, y: -50 }} // Start from the right
              animate={{ opacity: 1, y: 0 }} // Move to the center
              transition={{ duration: 0.289, delay: 0.2 }}
            >
              <p className="text-2sm mt-2 font-bold text-black-900 lg:text-xl lg:mt-4">
                سوالات متداولی که از ما می‌پرسید
              </p>
            </Motion>
            <Motion
              initial={{ opacity: 0, x: -50 }} // Start from the right
              animate={{ opacity: 1, x: 0 }} // Move to the center
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="hidden text-2sm font-medium  md:block md:mt-[9px] text-secondary">
                سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا پاسخ داده
                شده اند:
              </p>
            </Motion>
          </div>
          <div>
            <div className="space-y-2 md:space-y-4">
              {faqItems.map((item, index) => (
                <Motion
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }} // Start from the right
                  animate={{ opacity: 1, x: 0 }} // Move to the center
                  transition={{ duration: 0.5, delay: index * 0.12 }} // Add delay based on index
                >
                  <Accordion
                    title={item.title}
                    description={item.description}
                  />
                </Motion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
