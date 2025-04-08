"use client";
import React, { forwardRef } from "react";
import { TextFieldProps } from "./text-filed.types";
import classNames from "classnames";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { label, icon, error, containerClassName = "", className = "", ...props },
    ref
  ) => {
    const clonedIcon = icon
      ? React.cloneElement(icon as React.ReactElement, {
          className: `${
            (icon as React.ReactElement).props.className || ""
          } w-6 h-6`,
        })
      : null;

    const inputClassName = classNames(
      "textField",
      {
        "border-red-500": error,
        "border-gray-2": !error,
      },
      className
    );

    return (
      <div className={`flex flex-col ${containerClassName}`}>
        {label && (
          <label className="text-xs font-medium text-secondary mb-2 md:text-sm md:mb-4">
            {label}
          </label>
        )}
        <div className="relative">
          <input ref={ref} className={inputClassName} {...props} />
          {clonedIcon && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 md:right-4">
              {clonedIcon}
            </div>
          )}
        </div>
        {error && <p className=" text-red-500 pr-2 mt-1 text-xs">{error}</p>}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
