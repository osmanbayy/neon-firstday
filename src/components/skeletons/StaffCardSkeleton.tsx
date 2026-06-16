import { Skeleton } from "@/components/ui/skeleton";

export default function StaffCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/50 p-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          {/* Avatar */}
          <Skeleton className="h-16 w-16 rounded-full shrink-0" />

          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-16" />

            <Skeleton className="h-5 w-36" />

            <Skeleton className="h-4 w-24" />
          </div>
        </div>

        {/* Zodiac Badge */}
        <Skeleton className="h-8 w-24 rounded-full" />
      </div>

      {/* Divider */}
      <div className="mt-5 border-t border-border/40 pt-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-52" />
          </div>

          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-40" />
          </div>

          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-2">
        <Skeleton className="h-9 flex-1 rounded-xl" />

        <Skeleton className="h-9 flex-1 rounded-xl" />
      </div>
    </div>
  );
}