"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useView = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const view =
    searchParams.get("view") ?? "grid";

  const setView = (value: "grid" | "table") => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("view", value);

    router.push(`${pathname}?${params.toString()}`);
  };

  return { view, setView };
};