"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNavItems, secondaryNavItems } from "@/config/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/lib/stores/authStore";
import { LogOut, MoonIcon } from "lucide-react";
import { useAppStore } from "@/lib/stores/appStore";
import { LogoutConfirmModal } from "../modals/LogoutConfirmModal";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

export function AppSidebar() {
  const pathname = usePathname();

  const { user } = useAuthStore();
  const { logoutModalIsOpen, setLogoutModalIsOpen } = useAppStore();

  const { setTheme, theme } = useTheme();

  const isMobile = useIsMobile();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <Image src={"/neon-logo.png"} alt="Neon Logo" width={50} height={50} className="invert dark:invert-0 transition-all duration-300" />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Neon Apps</span>
                  <span className="text-xs text-sidebar-foreground/70">
                    {user?.name}
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {isMobile && <SidebarMenuItem>
                <SidebarMenuButton className="cursor-pointer" asChild tooltip={"Theme"}>
                  <div onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}>
                    <MoonIcon />
                    <span>Switch Theme</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
      <SidebarRail />

      <SidebarGroup>
        <SidebarGroupLabel>Account</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem className="cursor-pointer">
              <SidebarMenuButton tooltip="Logout" onClick={() => setLogoutModalIsOpen(true)}>
                <LogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <LogoutConfirmModal
        logoutModalIsOpen={logoutModalIsOpen}
        setLogoutModalIsOpen={setLogoutModalIsOpen}
      />
    </Sidebar>
  );
}
