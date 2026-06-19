"use client"

import { ANNOUNCEMENTS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Announcements() {
  const pathname = usePathname();
  const isHomePage = pathname === "/home";
  
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium font-sans tracking-tighter">Announcements</h2>
          <p className="text-muted-foreground text-sm">
            Latest updates and important information
          </p>
        </div>
        {isHomePage && <Link href={"home/announcements"} className="underline text-xs hover:text-primary">
          View All Announcements
        </Link>}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {ANNOUNCEMENTS.map((announcement) => {
          const Icon = announcement.icon;

          return (
            <Link key={announcement.id} href={`/home/announcements/${announcement.id}`}>
              <div
                key={announcement.id}
                className="rounded-xl border bg-card p-5 transition-all duration-300 hover:border-accent-foreground/20 cursor-pointer"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg border p-2">
                    <Icon className="size-5" />
                  </div>

                  <div>
                    <h3 className="font-sans">
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
            </Link>
          );
        })}
      </div>
    </section>
  );
}