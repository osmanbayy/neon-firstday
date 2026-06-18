import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  ChartColumn,
  LayoutGrid,
  MoreHorizontal,
  RefreshCw,
  Table2,
  Upload,
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

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
  onOpenCsvModal: () => void;

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
  onOpenCsvModal
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

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="cursor-pointer"
          >
            <MoreHorizontal />
            Quick Actions
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem
            onClick={onAnalyze}
            className="cursor-pointer"
          >
            <ChartColumn />
            Analyze Zodiacs
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={onOpenCsvModal}
            className="cursor-pointer"
          >
            <Upload />
            Upload CSV
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={onRefresh}
            className="cursor-pointer"
            disabled={isLoading || isFetching}
          >
            <RefreshCw />
            Refresh List
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}