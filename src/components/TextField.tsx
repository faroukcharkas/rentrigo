"use client";
import { InputLayoutType } from "@/globals";

export default function TextField({
  inputLayoutType,
  flex = false,
}: {
  inputLayoutType: InputLayoutType;
  flex?: boolean;
}) {
  var classNames: string =
    "block  w-full h-full px-2 text-body1 border-2 outline-none border-gray py-1.5 text-black shadow-field-default placeholder:text-dark-gray font-light";
  switch (inputLayoutType) {
    case InputLayoutType.Leading:
      classNames += " rounded-l-[16px] border-r-0 ";
      break;
    case InputLayoutType.Trailing:
      classNames += " rounded-r-[16px] border-l-0 ";
      break;
    case InputLayoutType.Standalone:
      classNames += " rounded-[16px] ";
      break;
    case InputLayoutType.Middle:
      classNames += " border-r-0 ";
      break;
    default:
      break;
  }
  if (flex == true) {
    classNames += " flex-1 ";
  }
  return <input type="text" className={classNames} placeholder="ZIP Code" />;
}
