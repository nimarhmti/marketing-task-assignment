import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon as menu } from "../icons.type";

export default function SvgIcon(props: menu) {
  return (
    <BaseIcon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </BaseIcon>
  );
}
