import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Step {
  label: string;
  path: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={step.path} className="flex-1 flex items-center">
            {/* دایره عدد یا آیکون */}
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center border-2 text-sm font-medium z-10",
                isCompleted && "bg-blue-600 text-white border-blue-600",
                isActive && !isCompleted && "border-blue-600 text-blue-600",
                !isActive && !isCompleted && "border-gray-300 text-gray-400"
              )}
            >
              {isCompleted ? <Check size={16} /> : index + 1}
            </div>

            {/* عنوان */}
            <div className="ml-2 text-sm whitespace-nowrap">{step.label}</div>

            {/* خط اتصال بین دایره‌ها */}
            {index !== steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-gray-300 mx-2" />
            )}
          </div>
        );
      })}
    </div>
  );
}
