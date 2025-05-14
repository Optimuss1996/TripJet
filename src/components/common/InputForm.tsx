import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  direction?: "rtl" | "ltr";
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  prefix?: string;
}

const InputForm = ({
  label,
  type = "text",
  direction = "rtl",
  containerClassName,
  inputClassName,
  labelClassName,
  prefix,
  ...props
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isPassword = type === "password";
  const isTel = type === "tel";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div
      className={cn("relative w-full h-14", containerClassName)}
      dir={direction}
    >
      <Label
        htmlFor={props.id}
        className={cn(
          "absolute z-10 right-4 -top-1 bg-neutral-white px-2 text-labelMd text-neutral-text-400",
          isFocused && "text-primary",
          labelClassName
        )}
      >
        {label}
      </Label>

      <div className="relative flex items-center h-full">
        {isTel && prefix && (
          <span className="absolute right-3 text-muted-foreground text-sm">
            {prefix}
          </span>
        )}

        <Input
          {...props}
          type={inputType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            "mt-2 w-full h-full rounded-lg bg-neutral-white px-3 py-2 text-bodyMd text-neutral-text-500 placeholder:text-neutral-text-400 placeholder:text-labelMd outline-none",
            isFocused ? "border border-primary" : "border border-gray-300",
            "!ring-0 !focus-visible:ring-0",
            isTel && prefix ? "pr-16" : "",
            isPassword ? "pr-10" : "",
            inputClassName
          )}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputForm;
