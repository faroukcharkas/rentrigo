"use client";
import { InputLayoutType } from "@/globals";

export default function Button({
  inputLayoutType,
  label,
  color,
  flex = false,
}: {
  inputLayoutType: InputLayoutType;
  label: string;
  color: string;
  flex?: boolean;
}) {
  var classNames: string =
    "border-[1px] border-green text-white text-button text-body1 max-w-25 bg-" +
    color;
  switch (inputLayoutType) {
    case InputLayoutType.Leading:
      classNames += " rounded-l-[16px] border-r-0 ";
      break;
    case InputLayoutType.Trailing:
      classNames += " rounded-r-[16px] ";
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
  return <button className={classNames}>{label}</button>;
}
