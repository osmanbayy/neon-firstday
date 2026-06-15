import { User, UserPlus, LucideIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface StaffCardProps {
  id: number;
  name: string;
  department: string;
  zodiac: string;
  zodiacIcon: LucideIcon
}

export function StaffCard({
  id,
  name,
  department,
  zodiac,
  zodiacIcon
}: StaffCardProps) {
  const ZodiacIcon = zodiacIcon;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-linear-to-br from-background via-background to-muted/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-center gap-4">
        {/* Avatar */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
          <Image
            src="/neon-logo.png"
            alt={`${name}'s avatar`}
            width={72}
            height={72}
            className="relative rounded-full border-2 dark:border-border object-cover p-2 invert dark:invert-0"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
            Employee #{id}
          </span>

          <h2 className="mt-1 text-lg font-semibold tracking-tight">
            {name}
          </h2>

          <p className="text-sm text-muted-foreground">
            {department}
          </p>

          <div className="mt-3 inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium">
            <ZodiacIcon size={20} />
            {zodiac}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <Button
            size="sm"
            className="cursor-pointer rounded-xl shadow-sm"
          >
            <UserPlus size={16} />
            Contact
          </Button>

          <Button
            variant="secondary"
            size="sm"
            className="cursor-pointer rounded-xl"
          >
            <User size={16} />
            Profile
          </Button>
        </div>
      </div>
    </div>
  );
}