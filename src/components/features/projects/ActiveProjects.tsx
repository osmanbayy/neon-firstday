import { ACTIVE_PROJECTS } from "@/lib/constants";
import { FolderKanban, Users, CalendarDays } from "lucide-react";



export default function ActiveProjects() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg tracking-tighter font-medium font-sans">Active Projects</h2>
        <p className="text-muted-foreground text-sm">
          Track ongoing projects and their progress.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {ACTIVE_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="rounded-xl border bg-card p-5 transition-all duration-300 hover:shadow-md"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg border p-2">
                <FolderKanban className="size-5" />
              </div>

              <div>
                <h3 className="font-sans">{project.name}</h3>
                <p className="text-muted-foreground text-xs">
                  Active Project
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-4 text-sm">
              {project.description}
            </p>

            <div className="mb-4">
              <div className="mb-2 flex justify-between text-sm">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>

              <div className="h-2 w-full rounded-full bg-muted">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="text-muted-foreground flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <Users className="size-4" />
                <span>{project.members} Members</span>
              </div>

              <div className="flex items-center gap-1">
                <CalendarDays className="size-4" />
                <span>{project.deadline}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}