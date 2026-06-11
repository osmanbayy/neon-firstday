"use client"

import Announcements from "@/components/features/announcements/Announcements";
import ActiveProjects from "@/components/features/projects/ActiveProjects";

export default function DashboardHome() {
  return (
    <div className="p-5">
      <div className="space-y-5">
        <Announcements />
        <ActiveProjects />
      </div>
    </div>
  )
}