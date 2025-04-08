"use client";
import Checkbox from "@/app/_components/checkbox/checkbox";
import { IconCall, IconProfile, IconSms } from "@/app/_components/icons/icons";
import TextField from "@/app/_components/text-field/text-field";
import Textarea from "@/app/_components/textarea/textarea";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import React from "react";
import { FormValues, schema } from "./shecma";
import Button from "@/app/_components/button/button";

export default function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
      marketing: false,
      advertising: false,
      content: false,
      design: false,
      social: false,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setTimeout(() => {
      console.log("،فرم ارسال شد! ", data);
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white flex flex-col items-center gap-y-8 rounded-base shadow-custom w-full py-8 px-4 md:border md:gap-y-10 md:border-gray-2 md:shadow-none lg:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full ">
        {/* fullname */}
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="نام و نام خانوادگی خود را وارد کنید"
              placeholder="نام و نام خانوادگی"
              icon={
                <IconProfile
                  className={`w-6 h-6 stroke-error`}
                  fill="none"
                  viewBox="0 0 24 24"
                />
              }
              error={errors.name?.message}
            />
          )}
        />
        {/* email */}
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="email"
              label="آدرس ایمیل خود را وارد کنید"
              placeholder="مثلا email@mail.com"
              icon={
                <IconSms
                  className={`w-6 h-6 stroke-error`}
                  fill="none"
                  viewBox="0 0 24 24"
                />
              }
              error={errors.email?.message}
            />
          )}
        />
        {/* phone */}

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="شماره تماس خود را وارد کنید"
              placeholder="مثلا091212345678"
              icon={
                <IconCall
                  className={`w-6 h-6 stroke-error`}
                  fill="none"
                  viewBox="0 0 24 24"
                />
              }
              error={errors.phone?.message}
            />
          )}
        />
      </div>
      {/* services */}
      <div className="w-full">
        <h4 className="text-black-900 text-sm font-medium md:font-semibold">
          نوع سرویس(های) مورد نظر خود را انتخاب کنید.{" "}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 lg:grid-cols-5 md:mt-4">
          {/* seo */}
          <Controller
            name="social"
            control={control}
            render={({ field: { value, ...field } }) => (
              <Checkbox {...field} checked={value} label="خدمات سئو" />
            )}
          />
          {/* web design */}
          <Controller
            name="design"
            control={control}
            render={({ field: { value, ...field } }) => (
              <Checkbox {...field} checked={value} label="طراحی وب سایت" />
            )}
          />

          {/* marketing */}
          <Controller
            name="marketing"
            control={control}
            render={({ field: { value, ...field } }) => (
              <Checkbox
                {...field}
                checked={value}
                label="اتوماسیون و بازاریابی"
                containerClassName="order-last md:order-none col-span-full md:col-span-1"
              />
            )}
          />

          {/* advertising */}
          <Controller
            name="advertising"
            control={control}
            render={({ field: { value, ...field } }) => (
              <Checkbox
                {...field}
                checked={value}
                label="کمپین‌های بازاریابی و تبلیغاتی"
                mobileLabel="کمپین‌های بازاریابی"
              />
            )}
          />

          {/* content */}
          <Controller
            name="content"
            control={control}
            render={({ field: { value, ...field } }) => (
              <Checkbox {...field} checked={value} label="خدمات تولید محتوا" />
            )}
          />
        </div>
        {Object.keys(errors).length > 0 && (
          <p className="text-xs text-red-500 mt-2">
            {
              Object.values(errors).find(
                (error) => error.type === "atLeastOneChecked"
              )?.message
            }
          </p>
        )}
      </div>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Textarea
            {...field}
            label="در مورد درخواست خود برای ما بنویسید."
            placeholder="توضیحات (اختیاری)"
            error={errors.description?.message}
            containerClassName="w-full h-[188px] md:h-[171px]"
            className="h-full"
          />
        )}
      />
      <Button
        type="submit"
        variant="secondary"
        className="w-full max-w-[386px]"
      >
        ارسال درخواست
      </Button>
    </form>
  );
}
