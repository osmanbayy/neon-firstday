import { User, UserPlus } from 'lucide-react';
import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';

interface StaffCardProps {
  id: number;
  name: string;
  department: string;
  zodiac: string;
}

export const StaffCard: React.FC<StaffCardProps> = ({ id, name, department, zodiac }) => {
  return (
    <div className="bg-white dark:bg-blue-950/20 shadow-md rounded-lg p-4 flex items-center space-x-4 w-full border h-full">
      <Image src={'/next.svg'} alt={`${name}'s avatar`} className="size-16 rounded-lg dark:invert" />
      <div className="flex flex-col gap-1 flex-1">
        <span className="text-sm text-gray-500">ID: {id}</span>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">Department: {department}</p>
        <p className="text-sm text-gray-500">Zodiac: {zodiac}</p>
      </div>
      <div className="flex flex-col gap-2 items-end ml-auto">
        <Button variant="outline" size="sm" className="flex items-center gap-1 w-full cursor-pointer">
          <UserPlus size={16} />
          Contact
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-1 w-full cursor-pointer">
          <User size={16} />
          Profile
        </Button>
      </div>
    </div>
  )
}
