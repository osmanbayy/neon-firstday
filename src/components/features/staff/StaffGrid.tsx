"use client";

import { useMembers } from "@/hooks/use-members";
import { useOffline } from "@/hooks/use-offline";

import { Button } from "@/components/ui/button";
import { ChartColumn, ChevronLeft, ChevronRight, LayoutGrid, RefreshCw, Table2 } from "lucide-react";
import { StaffCard } from "./StaffCard";
import StaffCardSkeleton from "@/components/skeletons/StaffCardSkeleton";
import { usePagination } from "@/hooks/use-pagination";
import { useView } from "@/hooks/use-view";
import { StaffTable } from "./StaffTable";
import { useMemo, useState } from "react";
import { getZodiacAnalytics } from "@/lib/utils";
import { ZodiacAnalyticsModal } from "@/components/modals/ZodiacAnalyticsModal";

const ITEMS_PER_PAGE = 9;

export function StaffGrid() {
  const {
    data: members = [],
    isLoading,
    isFetching,
    isError,
    error,
    refetch
  } = useMembers();

  useOffline();

  const {
    currentPage,
    totalPages,
    visiblePages,
    paginatedData,
    changePage,
  } = usePagination({
    data: members,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  const { view, setView } = useView();

  const [analyzeZodiacModalIsOpen, setAnalyzeModalIsOpen] = useState<boolean>(false);

  const zodiacAnalytic = useMemo(() => getZodiacAnalytics(members), [members])

  if (isError) {
    return (
      <div className="p-5 text-center space-y-3">
        <p className="text-sm text-destructive font-medium">
          An error occurred while uploading the data.
          : {error?.message || "Unknown error"}
        </p>
        <Button variant="outline" onClick={() => refetch()}>
          Try again
        </Button>
      </div>
    );
  }

  return (
    <section className="space-y-6 p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-sans text-xl font-bold tracking-tight">
            Staff Members
          </h2>
          <p className="text-sm text-muted-foreground">
            View and manage all team members across departments.
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            size="icon"
            variant={
              view === "grid"
                ? "default"
                : "outline"
            }
            onClick={() =>
              setView("grid")
            }
          >
            <LayoutGrid size={18} />
          </Button>

          <Button
            size="icon"
            variant={
              view === "table"
                ? "default"
                : "outline"
            }
            onClick={() =>
              setView("table")
            }
          >
            <Table2 size={18} />
          </Button>

          <Button
            variant={"outline"}
            onClick={() => setAnalyzeModalIsOpen(true)}
            className="cursor-pointer"
          >
            <ChartColumn size={4} />
            Analyze Zodiacs
          </Button>

          <Button
            variant="outline"
            onClick={() => refetch()}
            disabled={
              isFetching || isLoading
            }
            className="cursor-pointer"
          >
            <RefreshCw
              className={`mr-2 h-4 w-4 ${isFetching
                ? "animate-spin"
                : ""
                }`}
            />

            Refresh
          </Button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({
              length:
                ITEMS_PER_PAGE,
            }).map((_, index) => (
              <StaffCardSkeleton
                key={index}
              />
            ))
            : paginatedData.map(
              (staff) => (
                <StaffCard
                  key={staff.id}
                  {...staff}
                />
              )
            )}
        </div>
      ) : (
        <StaffTable
          data={paginatedData}
        />
      )}

      {/* Empty state message */}
      {!isLoading && paginatedData.length === 0 && (
        <div className="text-center py-10 text-sm text-muted-foreground">
          No team members found.
        </div>
      )}
      {/* Pagination Section */}
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </div>

        {/* Pagination Buttons */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 pt-4 border-t border-border/20">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() =>
                changePage(currentPage - 1)
              }
              className="cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </Button>

            <div className="flex items-center gap-2">
              {visiblePages.map((page, index) => {
                if (page === "...") {
                  return (
                    <span
                      key={`ellipsis-${index}`}
                      className="px-2 text-sm text-muted-foreground"
                    >
                      ...
                    </span>
                  );
                }

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
                      changePage(Number(page))
                    }
                    className="cursor-pointer"
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
              className="cursor-pointer"
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        )}
      </div>

      <ZodiacAnalyticsModal
        analytics={zodiacAnalytic}
        open={analyzeZodiacModalIsOpen}
        onOpenChange={setAnalyzeModalIsOpen}
      />
    </section>
  );
}