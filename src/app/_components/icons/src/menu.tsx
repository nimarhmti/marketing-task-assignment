import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon as menu } from "../icons.type";

export default function SvgIcon(props: menu) {
  return (
    <BaseIcon {...props}>
      <path d="M3 7H21" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 12H21" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 17H21" strokeWidth="1.5" strokeLinecap="round" />
    </BaseIcon>
  );
}
