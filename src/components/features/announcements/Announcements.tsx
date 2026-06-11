import { ANNOUNCEMENTS } from "@/lib/constants";

export default function Announcements() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl">Announcements</h2>
        <p className="text-muted-foreground text-sm">
          Latest updates and important information
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {ANNOUNCEMENTS.map((announcement) => {
          const Icon = announcement.icon;

          return (
            <div
              key={announcement.id}
              className="rounded-xl border bg-card p-5 transition-all duration-300 hover:shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="size-5" />
                </div>

                <div>
                  <h3 className="">
                    {announcement.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {announcement.date}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm tracking-tight">
                {announcement.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}