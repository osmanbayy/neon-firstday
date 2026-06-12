type ActivityEvent = {
  id: number,
  type: string,
  title: string,
  createdAt: string,
}

type ActivityFeedProps = {
  events: ActivityEvent[];
};

export const ActivityFeed = ({ events }: ActivityFeedProps) => {
  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  return (
    <div className="space-y-5">
      {sortedEvents.map((event) => (
        <div key={event.id} className="flex gap-3">
          <div className="mt-2 size-2 rounded-full bg-primary shrink-0" />

          <div className="space-y-1">
            <p className="text-sm font-medium">
              {event.title}
            </p>

            <span className="text-xs text-muted-foreground">
              {new Date(event.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}