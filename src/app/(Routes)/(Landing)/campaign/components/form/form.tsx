import { IconArrow } from "@/app/_components/icons/icons";
import TextField from "@/app/_components/text-field/text-field";
import React from "react";

export default function Form() {
  return (
    <div className="bg-white rounded-base shadow-custom w-full py-8 px-4 md:border md:border-gray-2 md:shadow-none lg:p-10">
      <TextField
        label="نام نام خانوادگی"
        error="تست"
        placeholder="Enter username"
        icon={
          <IconArrow
            className={`w-6 h-6 fill-black`}
            fill="none"
            viewBox="0 0 24 24"
          />
        }
      />
    </div>
  );
}
