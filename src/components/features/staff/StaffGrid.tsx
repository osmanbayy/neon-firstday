"use client";

import { useMemo } from "react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import { STAFF_MEMBERS } from "@/lib/constants";

import { Button } from "@/components/ui/button";

import { StaffCard } from "./StaffCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 9;

export function StaffGrid() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = Number(
    searchParams.get("page") || "1"
  );

  const totalPages = Math.ceil(
    STAFF_MEMBERS.length / ITEMS_PER_PAGE
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

  const paginatedStaff = useMemo(() => {
    const startIndex =
      (currentPage - 1) * ITEMS_PER_PAGE;

    const endIndex =
      startIndex + ITEMS_PER_PAGE;

    return STAFF_MEMBERS.slice(
      startIndex,
      endIndex
    );
  }, [currentPage]);

  return (
    <section className="space-y-6 p-5">
      <div>
        <h2 className="font-sans text-lg font-medium tracking-tighter">
          Staff Members
        </h2>

        <p className="text-sm text-muted-foreground">
          View and manage all team members across
          departments.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {paginatedStaff.map((staff) => (
          <StaffCard
            key={staff.id}
            id={staff.id}
            name={staff.name}
            department={staff.department}
            zodiac={staff.zodiac}
            zodiacIcon={staff.zodiacIcon}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-3">
        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={() =>
            changePage(currentPage - 1)
          }
          className="cursor-pointer! disabled:cursor-not-allowed!"
        >
          <ChevronLeft />
        </Button>

        <div className="flex items-center gap-2">
          {Array.from({
            length: totalPages,
          }).map((_, index) => {
            const page = index + 1;

            return (
              <Button
                key={page}
                variant={
                  currentPage === page
                    ? "default"
                    : "outline"
                }
                size="icon"
                onClick={() =>
                  changePage(page)
                }
                className="cursor-pointer!"
              >
                {page}
              </Button>
            );
          })}
        </div>

        <Button
          variant="outline"
          disabled={currentPage === totalPages}
          onClick={() =>
            changePage(currentPage + 1)
          }
          className="cursor-pointer!"
        >
          <ChevronRight />
        </Button>
      </div>
    </section>
  );
}