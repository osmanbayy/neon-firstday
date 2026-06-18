"use client";

import { ViewMode } from "@/lib/types/app";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export const useView = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const rawView = searchParams.get("view");

  const view: ViewMode = rawView === "table" ? "table" : "grid";

  const setView = (value: ViewMode) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("view", value);

    router.push(`${pathname}?${params.toString()}`);
  };

  return { view, setView };
};