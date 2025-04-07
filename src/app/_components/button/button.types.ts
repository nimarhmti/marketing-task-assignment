import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "../types/components-base.types";

export type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase & {
    isOutline?: boolean;
  };
