import { SortDirection, UseSortProps } from "@/lib/types/app";
import { useMemo } from "react";

export function useSort<T>({ data, sortBy, direction = "asc" as SortDirection }: UseSortProps<T>) {
  return useMemo(() => {
    if (!sortBy || !direction) {
      return data;
    }

    const sorted = [...data];

    sorted.sort((a, b) => {
      const valueA = String(a[sortBy]).toLowerCase();
      const valueB = String(b[sortBy]).toLowerCase();

      if (direction === "asc") return valueA.localeCompare(valueB);

      return valueB.localeCompare(valueA);
    });

    return sorted
  }, [data, sortBy, direction])
}