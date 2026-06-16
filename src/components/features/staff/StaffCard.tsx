import { User, UserPlus, Mail, Phone, FileText } from "lucide-react";
import * as LucideIcons from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface StaffCardProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  department: string,
  zodiac: string;
  zodiacIcon: LucideIcons.LucideIcon,
  postCount: number;
}
export function StaffCard({
  id,
  name,
  username,
  email,
  phone,
  department,
  zodiac,
  zodiacIcon: ZodiacIcon,
  postCount,
}: StaffCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border/50 bg-linear-to-br from-background via-background to-muted/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
            <Image
              src="/neon-logo.png"
              alt={`${name}'s avatar`}
              width={64}
              height={64}
              className="relative rounded-full border-2 border-border object-cover p-1.5 invert dark:invert-0"
            />
          </div>

          <div className="min-w-0">
            <span className="text-[10px] font-bold tracking-widest text-muted-foreground/80 uppercase block">
              ID: #{id}
            </span>
            <h2 className="mt-0.5 text-lg font-bold tracking-tight text-foreground truncate font-sans">
              {name}
            </h2>
            <p className="text-xs text-primary/80 font-medium truncate">
              @{username}
            </p>
            <p className="text-xs text-primary/80 font-medium truncate">
              {department}
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary select-none shrink-0 capitalize">
          <ZodiacIcon size={14} className="animate-pulse" />
          {zodiac}
        </div>
      </div>

      <div className="relative mt-5 space-y-2.5 border-t border-border/40 pt-4 text-sm text-muted-foreground">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2.5 hover:text-primary transition-colors min-w-0 group/link"
        >
          <Mail size={15} className="text-muted-foreground/70 group-hover/link:text-primary transition-colors shrink-0" />
          <span className="truncate">{email}</span>
        </a>

        <a
          href={`tel:${phone}`}
          className="flex items-center gap-2.5 hover:text-primary transition-colors min-w-0 group/link"
        >
          <Phone size={15} className="text-muted-foreground/70 group-hover/link:text-primary transition-colors shrink-0" />
          <span className="truncate">{phone}</span>
        </a>

        <div className="flex items-center gap-2.5 min-w-0">
          <FileText size={15} className="text-muted-foreground/70 shrink-0" />
          <span>
            <strong className="text-foreground font-semibold">{postCount}</strong> posts shared
          </span>
        </div>
      </div>

      <div className="relative mt-6 flex gap-2">
        <Button
          size="sm"
          className="flex-1 w-full cursor-pointer rounded-xl shadow-sm gap-1.5 text-xs font-medium"
        >
          <UserPlus size={14} />
          Contact
        </Button>

        <Button
          variant="secondary"
          size="sm"
          className="flex-1 w-full cursor-pointer rounded-xl gap-1.5 text-xs font-medium"
        >
          <User size={14} />
          Profile
        </Button>
      </div>
    </div>
  );
}