export default function AnnouncementsPageSkeleton() {
  const skeletonCards = Array.from({ length: 3 });

  return (
    <section className="space-y-4 animate-pulse p-5">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-5 w-36 rounded-md bg-muted" />
          <div className="h-4 w-56 rounded-md bg-muted/60" />
        </div>
        <div className="h-4 w-28 rounded-md bg-muted/40" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skeletonCards.map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-border/50 bg-card p-5 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="size-9 shrink-0 rounded-lg bg-muted" />
              
              <div className="space-y-2 w-full">
                <div className="h-4 w-3/4 rounded-md bg-muted" />
                <div className="h-3 w-1/4 rounded-md bg-muted/70" />
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div className="h-3.5 w-full rounded-md bg-muted/80" />
              <div className="h-3.5 w-5/6 rounded-md bg-muted/80" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}