import { User, UserPlus } from 'lucide-react';
import React from 'react'
import { Button } from './ui/button';

interface StaffCardProps {
  name: string;
  email: string;
  position: string;
  avatarUrl: string;
}

export const StaffCard: React.FC<StaffCardProps> = ({ name, email, position, avatarUrl }) => {
  return (
    <div className="bg-white dark:bg-stone-900 shadow-md rounded-lg p-4 flex items-center space-x-4 w-full h-full">
      <img src={avatarUrl} alt={`${name}'s avatar`} className="size-16 rounded-lg dark:invert" />
      <div className="flex flex-col gap-1 flex-1">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{position}</p>
        <p className="text-sm text-gray-500">{email}</p>
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
