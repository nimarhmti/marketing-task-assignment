import { Size } from "./size.types";
import { Variant } from "./variant.types";

export type ComponentBase = {
  variant?: Variant;
  size?: Size;
  isDisabled?: boolean;
  className?: string;
};
