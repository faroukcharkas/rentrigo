"use client";
import { InputLayoutType } from "@/globals";

const inputLayoutClassNames = {
  [InputLayoutType.Leading]: "rounded-l-[16px] border-r-0",
  [InputLayoutType.Trailing]: "rounded-r-[16px] border-l-[1px] border-gray",
  [InputLayoutType.Standalone]: "rounded-[16px]",
  [InputLayoutType.Middle]: "border-r-0",
};

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
  const flexClass = flex ? "flex-1" : "";
  const layoutClass = inputLayoutClassNames[inputLayoutType] ?? "";
  const classNames = `bg-${color} text-white text-button text-body1 max-w-25 ${layoutClass} ${flexClass}`;

  return <button className={classNames}>{label}</button>;
}
