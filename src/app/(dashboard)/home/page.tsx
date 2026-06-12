"use client"

import Announcements from "@/components/features/announcements/Announcements";
import ActiveProjects from "@/components/features/projects/ActiveProjects";
import Stats from "@/components/features/stats/Stats";

export default function DashboardHome() {
  return (
    <div className="p-5">
      <div className="space-y-5">
        <Stats />
        <Announcements />
        <ActiveProjects />
      </div>
    </div>
  )
}
