"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserDropdown } from "@/components/dropdowns/UserDropdown";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/80">
      <SidebarTrigger className="-ml-1" />

      <div className="flex flex-1 items-center justify-between">
        <div className="text-lg font-medium text-foreground">Neon Apps</div>

        <div className="flex items-center gap-4">
          {!isMobile && <ThemeToggle />}
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}
