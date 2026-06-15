"use client"

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

export function useOnboardingStep() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentStep = Number(searchParams.get("step") || 1)

  const updateStep = (value: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("step", String(value));

    router.replace(`${pathname}?${params}`)
  }

  const goNextStep = () => {
    updateStep(Math.min(currentStep + 1, 3))
  }

  const goPreviousStep = () => {
    updateStep(Math.max(currentStep - 1, 1))
  }

  return {
    currentStep,
    goNextStep,
    goPreviousStep,
    updateStep
  }
}