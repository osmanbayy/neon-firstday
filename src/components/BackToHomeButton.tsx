"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function BackToHomeButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.replace("/home")}
      variant="outline"
      className="w-fit cursor-pointer"
    >
      <ArrowLeft />
      Back to Home
    </Button>
  );
}