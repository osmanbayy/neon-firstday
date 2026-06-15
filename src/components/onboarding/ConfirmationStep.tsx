"use client";

import { OnboardingData } from "@/types/onboarding";
import { ArrowLeft, Check, User, Briefcase, CalendarCheck } from "lucide-react";
import { Button } from "../ui/button";

type ConfirmationStepProps = {
  data: OnboardingData;
  onBack: () => void;
  onSubmit: () => void;
};

export function ConfirmationStep({ data, onBack, onSubmit }: ConfirmationStepProps) {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-card rounded-2xl border border-border/50 shadow-xl shadow-foreground/2">
      <div className="mb-6 space-y-1.5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2">
          <CalendarCheck className="h-5 w-5 text-primary animate-pulse" />
          Review & Confirm
        </h2>
        <p className="text-sm text-muted-foreground">
          Double-check your information before completing the setup.
        </p>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-muted/40 rounded-xl border border-border/40 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <User className="h-3.5 w-3.5 text-primary" />
            <span>Personal Details</span>
          </div>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
            <div>
              <span className="text-xs text-muted-foreground block">Full Name</span>
              <span className="font-medium text-foreground">{data.firstName} {data.lastName}</span>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Zodiac Sign</span>
              <span className="font-medium text-foreground">{data.zodiac || "Not specified"}</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-muted/40 rounded-xl border border-border/40 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5 text-primary" />
            <span>Professional Details</span>
          </div>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
            <div>
              <span className="text-xs text-muted-foreground block">Department</span>
              <span className="font-medium text-foreground">{data.department || "—"}</span>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Role / Title</span>
              <span className="font-medium text-foreground">{data.role || "—"}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2 justify-between w-full">
          <Button
            variant={"secondary"}
            type="button"
            onClick={onBack}
            className="cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>

          <Button
            variant={"default"}
            type="button"
            onClick={onSubmit}
            className="cursor-pointer"
          >
            <span>Complete</span>
            <Check className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}