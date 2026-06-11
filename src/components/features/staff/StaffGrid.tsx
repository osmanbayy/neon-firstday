import { STAFF_MEMBERS } from "@/lib/constants";

import { StaffCard } from "./StaffCard";

export function StaffGrid() {
  return (
    <section className="space-y-4 p-5">
      <div>
        <h2 className="text-lg font-medium tracking-tighter font-sans">
          Staff Members
        </h2>

        <p className="text-sm text-muted-foreground">
          View and manage all team members across
          departments.
        </p>
      </div>

      <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {STAFF_MEMBERS.map((staff) => (
          <StaffCard
            key={staff.id}
            id={staff.id}
            name={staff.name}
            department={staff.department}
            zodiac={staff.zodiac}
          />
        ))}
      </div>
    </section>
  );
}