import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon as search } from "../icons.type";

export default function SvgIcon(props: search) {
  return (
    <BaseIcon {...props}>
      <path
        d="M15.3333 28C22.3289 28 28 22.3289 28 15.3333C28 8.33773 22.3289 2.66667 15.3333 2.66667C8.33773 2.66667 2.66667 8.33773 2.66667 15.3333C2.66667 22.3289 8.33773 28 15.3333 28Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.3333 29.3333L26.6667 26.6667"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}
