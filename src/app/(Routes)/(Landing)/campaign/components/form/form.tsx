import Checkbox from "@/app/_components/checkbox/checkbox";
import { IconCall, IconProfile, IconSms } from "@/app/_components/icons/icons";
import TextField from "@/app/_components/text-field/text-field";
import Textarea from "@/app/_components/textarea/textarea";

import React from "react";

export default function Form() {
  return (
    <div className="bg-white flex flex-col gap-y-8 rounded-base shadow-custom w-full py-8 px-4 md:border md:gap-y-10 md:border-gray-2 md:shadow-none lg:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TextField
          label="نام و نام خانوادگی خود را وارد کنید"
          placeholder="نام و نام خانوادگی"
          icon={
            <IconProfile
              className={`w-6 h-6 stroke-error`}
              fill="none"
              viewBox="0 0 24 24"
            />
          }
        />
        <TextField
          label="آدرس ایمیل خود را وارد کنید"
          placeholder="مثلا email@mail.com"
          icon={
            <IconSms
              className={`w-6 h-6 stroke-error`}
              fill="none"
              viewBox="0 0 24 24"
            />
          }
        />
        <TextField
          label="شماره تماس خود را وارد کنید"
          placeholder="مثلا091212345678"
          icon={
            <IconCall
              className={`w-6 h-6 stroke-error`}
              fill="none"
              viewBox="0 0 24 24"
            />
          }
        />
      </div>
      <div className="">
        <h4 className="text-black-900 text-sm font-medium md:font-semibold">
          نوع سرویس(های) مورد نظر خود را انتخاب کنید.{" "}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 lg:grid-cols-5 md:mt-4">
          <Checkbox label="خدمات سئو" checked={false} />
          <Checkbox label="طراحی وب سایت" checked={false} />
          <Checkbox
            label="اتوماسیون و بازاریابی"
            checked={false}
            containerClassName="order-last md:order-none col-span-full md:col-span-1"
          />
          <Checkbox
            label="کمپین‌های بازاریابی و تبلیغاتی"
            mobileLabel="کمپین‌های بازاریابی"
            checked={false}
          />
          <Checkbox label="خدمات تولید محتوا" checked={false} />
        </div>
      </div>
      <Textarea
        label="در مورد درخواست خود برای ما بنویسید."
        placeholder="توضیحات (اختیاری)"
      />
    </div>
  );
}
