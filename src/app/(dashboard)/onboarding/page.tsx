"use client";

import { useState } from "react";

import { IdentityStep } from "@/components/onboarding/IdentityStep";
import { ProfessionalStep } from "@/components/onboarding/ProfessionalStep";
import { ConfirmationStep } from "@/components/onboarding/ConfirmationStep";

import { OnboardingData } from "@/types/onboarding";
import { useOnboardingStep } from "@/hooks/use-onboarding-step";
import { Progressbar } from "@/components/onboarding/Progressbar";
import { toast } from "sonner";
import { downloadOnboardingCSV } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Page() {
  const { currentStep, goNextStep, goPreviousStep, updateStep } = useOnboardingStep();

  const router = useRouter()

  const [formData, setFormData] =
    useState<OnboardingData>({
      firstName: "",
      lastName: "",
      zodiac: "",
      department: "",
      role: "",
    });

  const isIdentityStepValid = !!(formData.firstName && formData.lastName && formData.zodiac);
  const isProfessionalStepValid = !!(formData.department && formData.role)

  const saveData = (values: Partial<OnboardingData>) => {
    setFormData((prev) => ({
      ...prev,
      ...values,
    }));
  };

  let maxPermittedStep = 1;
  if (isIdentityStepValid) maxPermittedStep = 2;
  if (isProfessionalStepValid) maxPermittedStep = 3;

  const handleFinalSubmit = async () => {
    downloadOnboardingCSV(formData);
    toast.success("CSV file is ready.");
    router.push("/home");
  }


  return (
    <div className="mx-auto max-w-3xl py-10">
      <Progressbar maxPermittedStep={maxPermittedStep} onStepClick={(targetStep) => updateStep(targetStep)} currentStep={currentStep} />

      {currentStep === 1 && (
        <IdentityStep
          defaultValues={{
            firstName: formData.firstName,
            lastName: formData.lastName,
            zodiac: formData.zodiac,
          }}
          onNext={(values) => {
            saveData(values);

            goNextStep();
          }}
        />
      )}

      {currentStep === 2 && (
        <ProfessionalStep
          defaultValues={{
            department:
              formData.department,

            role:
              formData.role,
          }}
          onBack={
            goPreviousStep
          }
          onNext={(values) => {
            saveData(values);

            goNextStep();
          }}
        />
      )}

      {currentStep === 3 && (
        <ConfirmationStep
          data={formData}
          onBack={
            goPreviousStep
          }
          onSubmit={handleFinalSubmit}
        />
      )}
    </div>
  );
}