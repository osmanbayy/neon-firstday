import { OnboardingData } from "@/types/onboarding"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const downloadOnboardingCSV = (data: OnboardingData) => {
  const headers = ["First Name", "Last Name", "Zodiac Sign", "Department", "Role / Title"];
  
  const rows = [
    [
      `"${data.firstName}"`,
      `"${data.lastName}"`,
      `"${data.zodiac || ""}"`,
      `"${data.department || ""}"`,
      `"${data.role || ""}"`
    ]
  ];

  const csvContent = [
    headers.join(","),
    ...rows.map(row => row.join(","))
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  
  const fileName = `onboarding_${data.firstName.toLowerCase()}_${data.lastName.toLowerCase()}.csv`;
  link.setAttribute("download", fileName);
  
  document.body.appendChild(link);
  link.click();
  
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};