import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  ChartColumn,
  LayoutGrid,
  RefreshCw,
  Table2,
} from "lucide-react";

type StaffHeaderButtonGroupProps = {
  search: string;
  onSearchChange: (
    value: string
  ) => void;

  resultsCount: number;

  view: "grid" | "table";

  onViewChange: (
    view: "grid" | "table"
  ) => void;

  onAnalyze: () => void;
  onRefresh: () => void;

  isLoading: boolean;
  isFetching: boolean;
};

export function StaffToolbar({
  search,
  onSearchChange,
  resultsCount,
  view,
  onViewChange,
  onAnalyze,
  onRefresh,
  isLoading,
  isFetching,
}: StaffHeaderButtonGroupProps) {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-start gap-2">
        <Input
          placeholder="Search members..."
          value={search}
          onChange={(e) =>
            onSearchChange(
              e.target.value
            )
          }
        />

        {search && (
          <p className="text-sm text-muted-foreground">
            {resultsCount}
            {" "}
            results found
          </p>
        )}
      </div>

      <Button
        size="icon"
        variant={
          view === "grid"
            ? "default"
            : "outline"
        }
        onClick={() =>
          onViewChange("grid")
        }
        className="cursor-pointer"
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
          onViewChange("table")
        }
        className="cursor-pointer"
      >
        <Table2 size={18} />
      </Button>

      <Button
        variant="outline"
        onClick={onAnalyze}
        className="cursor-pointer"
      >
        <ChartColumn
          className="mr-2 h-4 w-4"
        />
        Analyze Zodiacs
      </Button>

      <Button
        variant="outline"
        onClick={onRefresh}
        disabled={
          isLoading || isFetching
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
  );
}