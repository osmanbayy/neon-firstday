import React from 'react'
import { StaffCard } from './StaffCard'
import { STAFF_MEMBERS } from '@/lib/contants'

export const Hero: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-5 py-20 w-full">
      <div className="relative py-10 w-full max-w-7xl">
        <h1 className="text-4xl font-bold mb-4">
          Neon First Day!
        </h1>
        {/* Members Grid List */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
  )
}

