"use client";

import { useMemo } from "react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

interface UsePaginationProps<T> {
  data: T[];
  itemsPerPage: number;
}

export const usePagination = <T>({
  data,
  itemsPerPage,
}: UsePaginationProps<T>) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = Number(
    searchParams.get("page") || "1"
  );

  const totalPages = Math.ceil(
    data.length / itemsPerPage
  );

  const changePage = (page: number) => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.set("page", page.toString());

    router.push(
      `${pathname}?${params.toString()}`
    );
  };

  const paginatedData = useMemo(() => {
    const startIndex =
      (currentPage - 1) * itemsPerPage;

    const endIndex =
      startIndex + itemsPerPage;

    return data.slice(
      startIndex,
      endIndex
    );
  }, [
    currentPage,
    data,
    itemsPerPage,
  ]);

  const visiblePages = useMemo(() => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      return Array.from(
        { length: totalPages },
        (_, i) => i + 1
      );
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(
      2,
      currentPage - 1
    );

    const end = Math.min(
      totalPages - 1,
      currentPage + 1
    );

    for (
      let page = start;
      page <= end;
      page++
    ) {
      pages.push(page);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  }, [currentPage, totalPages]);

  return {
    currentPage,
    totalPages,
    visiblePages,
    paginatedData,
    changePage,
  };
};