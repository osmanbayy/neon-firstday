export default function AnnouncementSkeleton() {
  return (
    <div className="container max-w-3xl px-4 py-8 flex flex-col gap-3 animate-pulse">
      
      <div className="h-9 w-28 rounded-md bg-muted/60" />

      <div className="overflow-hidden rounded-2xl border border-secondary bg-card p-6 sm:p-8 space-y-6">
        
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3.5 w-full">
            <div className="size-11 shrink-0 rounded-xl bg-muted" />

            <div className="h-7 w-2/3 rounded-md bg-muted" />
          </div>

          <div className="self-start sm:self-center shrink-0">
            <div className="h-6 w-20 rounded-full bg-muted/70" />
          </div>
        </div>

        <div className="border-t border-muted/40" />

        <div className="space-y-3">
          <div className="h-4 w-full rounded-md bg-muted/80" />
          <div className="h-4 w-full rounded-md bg-muted/80" />
          <div className="h-4 w-5/6 rounded-md bg-muted/80" />
          <div className="h-4 w-2/3 rounded-md bg-muted/80" />
        </div>

      </div>
    </div>
  );
}