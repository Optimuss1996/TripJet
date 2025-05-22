import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  convertEnToFaNumbers,
  convertFaToEnNumbers,
} from "@/utils/Commonconvert";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  isNumeric?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = ({
  label,
  containerClassName,
  inputClassName,
  labelClassName,
  isNumeric = false,
  value,
  onChange,
  ...props
}: FormInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  // تبدیل عدد انگلیسی به فارسی برای نمایش در UI
  const displayValue = isNumeric && value ? convertEnToFaNumbers(value) : value;

  // مدیریت تغییر مقدار input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const englishValue = isNumeric
      ? convertFaToEnNumbers(inputValue)
      : inputValue;

    // ارسال مقدار به انگلیسی به فرم یا والد
    onChange?.({ ...e, target: { ...e.target, value: englishValue } });
  };

  return (
    <div className={cn("relative w-full h-14", containerClassName)}>
      <Label
        htmlFor={props.id}
        className={cn(
          "absolute z-10 right-4 -top-1 bg-neutral-white px-2 text-labelSm md:text-labelMd text-neutral-text-400",
          isFocused && "text-primary",
          labelClassName
        )}
      >
        {label}
      </Label>
      <div className="relative flex items-center h-full">
        <Input
          {...props}
          type="text"
          value={displayValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            "w-full h-full rounded-lg bg-neutral-white px-3 py-2 text-bodyMd text-neutral-text-500 placeholder:text-neutral-text-400 placeholder:text-labelMd outline-none",
            isFocused
              ? "border border-primary"
              : "border border-neutral-text-200",
            "!ring-0 !focus-visible:ring-0",
            inputClassName
          )}
        />
      </div>
    </div>
  );
};

export default InputForm;
