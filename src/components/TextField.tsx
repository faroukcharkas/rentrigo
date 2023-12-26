"use client";
import { InputLayoutType } from "@/globals";

const inputLayoutClassNames = {
  [InputLayoutType.Leading]: "rounded-l-[16px] border-r-0",
  [InputLayoutType.Trailing]: "rounded-r-[16px] border-l-0",
  [InputLayoutType.Standalone]: "rounded-[16px]",
  [InputLayoutType.Middle]: "border-r-0",
};

export default function TextField({
  inputLayoutType,
  flex = false,
  placeholder,
}: {
  inputLayoutType: InputLayoutType;
  flex?: boolean;
  placeholder: string;
}) {
  const flexClass = flex ? "flex-1" : "";
  const layoutClass = inputLayoutClassNames[inputLayoutType] ?? "";
  const classNames = `block w-full h-full px-2 text-body1 border-2 outline-none border-gray py-1.5 text-black shadow-field-default placeholder:text-dark-gray font-light ${layoutClass} ${flexClass}`;

  return <input type="text" className={classNames} placeholder={placeholder} />;
}
