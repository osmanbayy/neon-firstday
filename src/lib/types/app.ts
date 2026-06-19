import { Member } from "./user";

export type ViewMode = "grid" | "table";

export type SortOption =
  | "default"
  | "name-asc"
  | "name-desc"
  | "department-asc"
  | "department-desc";

export type SortDirection = "asc" | "desc";

export type UseSortProps<T> = {
  data: T[];
  sortBy: keyof T;
  direction?: SortDirection;
}

export type StaffHeaderButtonGroupProps = {
  search: string;
  onSearchChange: (value: string) => void;
  resultsCount: number;
  view: "grid" | "table";
  onViewChange: (view: "grid" | "table") => void;
  onAnalyze: () => void;
  onRefresh: () => void;
  onOpenCsvModal: () => void;
  isLoading: boolean;
  isFetching: boolean;
  sortBy: SortOption;
  setSortBy: (value: SortOption) => void;
  selectedCount: number;
  onBatchDelete: () => void;
};

export interface Announcement {
  id: number;
  title: string;
  description: string;
  date: string;
<<<<<<< HEAD
}

export interface StaffTableProps {
  data: Member[];
  search: string;
  selectedIds: Set<number>;
  onSelect: (id: number) => void;
=======
>>>>>>> a0900fb9cbe3ca504cedbc447745de8834fc1b80
}