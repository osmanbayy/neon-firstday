import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { ChartColumn, ChevronDown, LayoutGrid, RefreshCw, Table2, Upload } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SortOption, StaffHeaderButtonGroupProps } from "@/lib/types/app";

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
  onOpenCsvModal,
  sortBy,
  setSortBy,
  selectedCount,
  onBatchDelete
}: StaffHeaderButtonGroupProps) {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-start gap-2">
        <Input
          placeholder="Search members..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
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
        variant={view === "grid" ? "default" : "outline"}
        onClick={() => onViewChange("grid")}
        className="cursor-pointer"
      >
        <LayoutGrid size={18} />
      </Button>

      <Button
        size="icon"
        variant={view === "table" ? "default" : "outline"}
        onClick={() => onViewChange("table")}
        className="cursor-pointer"
      >
        <Table2 size={18} />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="cursor-pointer">
            <ChevronDown />
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

      <Select
        value={sortBy}
        onValueChange={(value) => setSortBy(value as SortOption)}
      >
        <SelectTrigger className="w-50">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="name-asc">
            Name (A-Z)
          </SelectItem>

          <SelectItem value="name-desc">
            Name (Z-A)
          </SelectItem>

          <SelectItem value="department-asc">
            Department (A-Z)
          </SelectItem>

          <SelectItem value="department-desc">
            Department (Z-A)
          </SelectItem>
        </SelectContent>
      </Select>

      {selectedCount > 0 && <Button
        variant="destructive"
        disabled={selectedCount === 0}
        onClick={onBatchDelete}
      >
        Delete Selected ({selectedCount})
      </Button>}
    </div>
  );
}