"use client";
import React, { forwardRef } from "react";
import classNames from "classnames";
import { TextareaProps } from "./textArea.types";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, error, containerClassName = "", className = "", ...props },
    ref
  ) => {
    const textareaClassName = classNames(
      "w-full min-h-[100px] text-2xs p-3 bg-white2 outline-none rounded-base border text-gray-6 focus:border-black-500 placeholder:text-gray-6 md:rounded-md md:text-xs resize-none",
      {
        "border-red-500": error,
        "border-gray-2": !error,
      },
      className
    );

    return (
      <div className={`flex flex-col gap-2 md:gap-4 ${containerClassName}`}>
        {label && (
          <label className="text-black-900 text-sm font-medium md:font-semibold">
            {label}
          </label>
        )}
        <textarea ref={ref} className={textareaClassName} {...props} />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
