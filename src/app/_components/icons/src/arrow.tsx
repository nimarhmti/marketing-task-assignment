import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIcon as arrowType } from "../icons.type";

export default function SvgIcon(props: arrowType) {
  return (
    <BaseIcon {...props}>
      <path d="M15.2001 10.49L13.2301 8.51999L10.0201 5.30999C9.34005 4.63999 8.18005 5.11999 8.18005 6.07999V12.31V17.92C8.18005 18.88 9.34005 19.36 10.0201 18.68L15.2001 13.5C16.0301 12.68 16.0301 11.32 15.2001 10.49Z" />
    </BaseIcon>
  );
}
