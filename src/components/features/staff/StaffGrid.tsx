import { STAFF_MEMBERS } from "@/lib/constants";

import { StaffCard } from "./StaffCard";

export function StaffGrid() {
  return (
    <div className="flex w-full flex-col items-center px-5 py-8">
      <div className="relative w-full max-w-7xl py-6">
        <h1 className="mb-10 text-center font-medium text-3xl">
          Neon Apps Staff Members
        </h1>
        <div className="relative grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </div>
  );
}
