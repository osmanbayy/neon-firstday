"use client"

import { LogOutIcon } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { userDropdownItems } from "@/config/navigation"
import { useAuth } from "@/hooks/use-auth"
import Link from "next/link"
import { useAppStore } from "@/lib/stores/appStore"

export function UserDropdown() {
  const { user } = useAuth();
  const firstLetter = user?.name.charAt(0).toUpperCase();

  const { setLogoutModalIsOpen } = useAppStore()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
            <span className="text-sm font-bold">{firstLetter}</span>
          </div>
        </button>
      </DropdownMenuTrigger>
      <div className="flex flex-col gap-0.5 leading-none">
        <span className="text-xs font-medium max-sm:hidden text-foreground">{user?.email}</span>
        <span className="text-xs text-sidebar-foreground/70 max-sm:hidden">{user?.role}</span>
      </div>
      <DropdownMenuContent align="end" side="bottom" sideOffset={8}>
        {userDropdownItems.map((item) => (
          <DropdownMenuItem key={item.title}>
            <Link href={item.href} className="flex items-center gap-2 w-full">
              <item.icon size={12} />
              {item.title}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={() => setLogoutModalIsOpen(true)}>
          <LogOutIcon size={12} className="cursor-pointer" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
