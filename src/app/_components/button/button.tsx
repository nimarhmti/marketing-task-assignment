import React from "react";
import { buttonProps } from "./button.types";
import classNames from "classnames";
export default function Button({
  type,
  children,
  variant,
  //   isOutline = false,
  isDisabled = false,
  className,
}: buttonProps) {
  const classes = classNames("btn", className, {
    [`btn-${variant}`]: variant,
  });

  return (
    <button className={classes} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
}
