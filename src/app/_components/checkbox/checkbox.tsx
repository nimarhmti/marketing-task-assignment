"use client";
import React, { forwardRef } from "react";
import classNames from "classnames";
import { IconCheck } from "../icons/icons";
import { CheckboxProps } from "./checkbox.types";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      error,
      containerClassName = "",
      className = "",
      id,
      mobileLabel,
      ...props
    },
    ref
  ) => {
    const checkboxClassName = classNames(
      "w-full h-full rounded-base bg-gray-1 appearance-none",
      className
    );
    const containerClasses = classNames(
      "flex flex-col gap-1",
      containerClassName
    );

    const checkIconClasses = classNames(
      "absolute top-1/2 left-1/2 stroke-white -translate-x-1/2 -translate-y-1/2 w-5 h-5 opacity-100 transition-opacity group-hover:stroke-green-600 ",
      {
        "stroke-green-600": props.checked,
      }
    );

    return (
      <div className={containerClasses}>
        <label
          className="flex items-center gap-1 cursor-pointer h-10 rounded-base border border-gray-1 pr-2 md:rounded-md md:pr-4 md:gap-2 group"
          htmlFor={id}
        >
          <div className="relative h-6 w-6">
            <input
              type="checkbox"
              ref={ref}
              id={id}
              className={checkboxClassName}
              {...props}
            />
            <IconCheck
              viewBox="0 0 20 20"
              fill="none"
              className={checkIconClasses}
            />
          </div>
          {label && (
            <span className="text-xs font-semibold text-secondary select-none">
              <span className="md:hidden">{mobileLabel || label}</span>
              <span className="hidden md:inline">{label}</span>
            </span>
          )}
        </label>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
