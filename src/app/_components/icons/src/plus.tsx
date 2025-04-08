import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon as plusType } from "../icons.type";

export default function SvgIcon(props: plusType) {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 12H16"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16V8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}
