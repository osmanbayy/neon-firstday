"use client";

import { Check } from "lucide-react";

type ProgressbarProps = {
  currentStep: number;
  maxPermittedStep: number;
  onStepClick: (step: number) => void;
};

const TOTAL_STEPS = 3;

const STEP_LABELS = ["Identity", "Professional", "Review"];

export const Progressbar = ({ currentStep, maxPermittedStep, onStepClick }: ProgressbarProps) => {
  return (
    <div className="mb-8 w-full max-w-md mx-auto max-sm:px-2 space-y-3">
      <div className="flex items-center gap-2">
        {Array.from({ length: TOTAL_STEPS }).map((_, index) => {
          const stepNumber = index + 1;

          const isCurrent = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;
          const isClickable = stepNumber <= maxPermittedStep;

          return (
            <button
              key={stepNumber}
              type="button"
              disabled={!isClickable}
              onClick={() => onStepClick(stepNumber)}
              className={`h-2 flex-1 rounded-full transition-all duration-500 relative group focus:outline-none ${isCompleted
                  ? "bg-primary cursor-pointer"
                  : isCurrent
                    ? "bg-primary/70 ring-2 ring-primary/20 cursor-default"
                    : isClickable
                      ? "bg-primary/30 cursor-pointer hover:bg-primary/40"
                      : "bg-muted cursor-not-allowed"
                }`}
            >
              {isClickable && !isCurrent && (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground border border-border text-[10px] font-medium px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-sm whitespace-nowrap">
                  Go to Step {stepNumber}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex justify-between items-center px-1 text-[11px] font-medium tracking-wider uppercase text-muted-foreground/80">
        {STEP_LABELS.map((label, index) => {
          const stepNumber = index + 1;
          const isCurrent = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;

          return (
            <span
              key={label}
              className={`flex items - center gap - 1 transition - colors duration - 300 ${isCurrent ? "text-primary font-semibold" : isCompleted ? "text-foreground" : ""
                }`}
            >
              {isCompleted && <Check className="h-3 w-3 text-primary stroke-3" />}
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
};