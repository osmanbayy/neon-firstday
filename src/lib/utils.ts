import { OnboardingData } from "@/types/onboarding"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Member } from "./types/user";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const downloadOnboardingCSV = (data: OnboardingData) => {
  const csvMapping: Record<keyof OnboardingData, string> = {
    firstName: "First Name",
    lastName: "Last Name",
    department: "Department",
    role: "Role",
    zodiac: "Zodiac"
  }

  const headers = Object.values(csvMapping)

  const keys = Object.keys(csvMapping) as Array<keyof OnboardingData>;
  const rows = [
    keys.map(key => {
      const value = data[key] ?? ""
      return `"${value}"`
    })
  ]

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

export const getZodiacAnalytics = (members: Member[]) => {
  const grouped: Record<string, Record<string, number>> = {};

  members.forEach((member) => {
    const department = member.department;
    const zodiac = member.zodiac;

    grouped[department] ??= {};
    grouped[department][zodiac] ??= 0;

    grouped[department][zodiac]++
  });

  return Object.entries(grouped).map(([department, zodiacCounts]) => {
    const totalMembers = Object.values(zodiacCounts).reduce((total, count) => total + count, 0);

    return {
      department,
      totalMembers,
      distribution: Object.entries(
        zodiacCounts
      ).map(([zodiac, count]) => ({
        zodiac,
        count,
        percentage: Number(
          (
            (count / totalMembers) *
            100
          ).toFixed(1)
        ),
      })),
    }
  })
}