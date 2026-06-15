import { OnboardingData } from "@/types/onboarding";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type OnboardingStore = {
  formData: OnboardingData;
  saveData: (values: Partial<OnboardingData>) => void;
  clearOnboarding: () => void;
};

const initialFormData: OnboardingData = {
  firstName: "",
  lastName: "",
  zodiac: "",
  department: "",
  role: ""
};

export const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set) => ({
      formData: initialFormData,

      saveData: (values) => {
        set((state) => ({
          formData: { ...state.formData, ...values }
        }))
      },

      clearOnboarding: () => set({ formData: initialFormData })
    }), {
    name: "neon-onboarding-storage"
  }
  )
)