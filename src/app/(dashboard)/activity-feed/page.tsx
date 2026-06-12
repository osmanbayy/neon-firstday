import { ActivityFeed } from "@/components/features/activities/ActivityFeed";
import { EVENTS } from "@/lib/constants";

export default function ActivityFeedPage() {
  return (
    <section className="space-y-5 p-5">
      <div>
        <h2 className="text-lg font-medium font-sans tracking-tighter">Activity Feed</h2>
        <p className="text-muted-foreground text-sm">
          Track recent team activity and project updates in chronological order.
        </p>
      </div>
      <ActivityFeed events={EVENTS} />
    </section>
  )
}