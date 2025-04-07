"use client";
import React, { FC } from "react";
import { SvgIcon } from "./icons.type";

// eslint-disable-next-line react/display-name
export const BaseIcon: FC<SvgIcon> = ({
  width = 24,
  height = 24,
  children,
  ...rest
}) => {
  return (
    <svg width={width} height={height} {...rest}>
      {children}
    </svg>
  );
};

export default BaseIcon;
