"use client";

import { useMembers } from "@/hooks/use-members";
import { useOffline } from "@/hooks/use-offline";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import { StaffCard } from "./StaffCard";
import OfflineAlert from "./OfflineAlert";
import StaffCardSkeleton from "@/components/skeletons/StaffCardSkeleton";
import { usePagination } from "@/hooks/use-pagination";

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

  const isOffline = useOffline();

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

  if (isError) {
    return (
      <div className="p-5 text-center space-y-3">
        <p className="text-sm text-destructive font-medium">
          Veriler yüklenirken bir hata oluştu: {error?.message || "Bilinmeyen Hata"}
        </p>
        <Button variant="outline" onClick={() => refetch()}>
          Tekrar Dene
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

        <Button
          variant="outline"
          onClick={() => refetch()}
          disabled={isFetching || isLoading}
          className="sm:w-auto w-full justify-center"
        >
          <RefreshCw
            className={`mr-2 h-4 w-4 ${isFetching ? "animate-spin" : ""
              }`}
          />
          Refresh
        </Button>
      </div>

      {isOffline && (
        <OfflineAlert
          isOffline={isOffline}
        />
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({
            length: ITEMS_PER_PAGE,
          }).map((_, index) => (
            <StaffCardSkeleton
              key={index}
            />
          ))
          : paginatedData.map((staff) => (
            <StaffCard key={staff.id} {...staff} />
          ))}
      </div>

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
    </section>
  );
}