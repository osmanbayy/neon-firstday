import { STATS } from "@/lib/constants";
import { StatCard } from "@/components/features/stats/StatCard";

export default function Stats() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-medium font-sans tracking-tighter">Stats</h2>
        <p className="text-muted-foreground text-sm">
          A quick overview of team and project activity.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat) => (
          <StatCard key={stat.id}>
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <StatCard.Label>{stat.label}</StatCard.Label>
                <StatCard.Value>{stat.value}</StatCard.Value>
              </div>

              <StatCard.Icon icon={stat.icon} />
            </div>

            <StatCard.Helper>{stat.helper}</StatCard.Helper>
            <StatCard.Trend>{stat.trend}</StatCard.Trend>
          </StatCard>
        ))}
      </div>
    </section>
  );
}
