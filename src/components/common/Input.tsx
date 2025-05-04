import React from "react";
import { twMerge } from "tailwind-merge";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const merged = twMerge(
      "w-full px-4 py-2 border rounded-lg  text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
      className
    );

    return <input ref={ref} className={merged} {...props} />;
  }
);

Input.displayName = "Input";

export default Input;
