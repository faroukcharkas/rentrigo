"use client";
import { InputLayoutType } from "@/globals";

export default function SelectField({
  inputLayoutType,
  flex = true,
  options,
  defaultValue = options[0],
}: {
  inputLayoutType: InputLayoutType;
  flex?: boolean;
  options: string[];
  defaultValue?: string;
}) {
  var classNames: string =
    "block w-full h-full px-2 text-body1 border-[1px] outline-none border-gray py-1.5 text-black shadow-field-default placeholder:text-dark-gray font-light";
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
  return (
    <div>
      <select className={classNames} defaultValue={defaultValue}>
        {options.map((item, _) => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
}
