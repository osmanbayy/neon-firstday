import { User, UserPlus } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface StaffCardProps {
  id: number;
  name: string;
  department: string;
  zodiac: string;
}

export function StaffCard({ id, name, department, zodiac }: StaffCardProps) {
  return (
    <div className="flex h-full w-full items-center space-x-4 rounded-lg border bg-card p-4 shadow-sm">
      <Image
        src="/neon-logo.png"
        alt={`${name}'s avatar`}
        width={64}
        height={64}
        className="rounded-lg invert dark:invert-0"
      />
      <div className="flex flex-1 flex-col gap-1">
        <span className="text-sm text-muted-foreground">ID: {id}</span>
        <h2 className="text-sm font-medium font-sans">{name}</h2>
        <p className="text-sm text-muted-foreground">{department}</p>
        <p className="text-sm text-muted-foreground">Zodiac: <span className="text-foreground font-light">{zodiac}</span></p>
      </div>
      <div className="ml-auto flex flex-col items-end gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex w-full cursor-pointer items-center gap-1"
        >
          <UserPlus size={16} />
          Contact
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex w-full cursor-pointer items-center gap-1"
        >
          <User size={16} />
          Profile
        </Button>
      </div>
    </div>
  );
}
