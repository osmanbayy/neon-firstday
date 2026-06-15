"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { adminNavItems, mainNavItems, secondaryNavItems } from "@/config/navigation";
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/lib/stores/authStore";
import { ChevronDown, LogOut, MoonIcon, User } from "lucide-react";
import { useAppStore } from "@/lib/stores/appStore";
import { LogoutConfirmModal } from "../modals/LogoutConfirmModal";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

export function AppSidebar() {
  const pathname = usePathname();
  const [openAdminItems, setOpenAdminItems] = useState<string[]>([]);

  const { user } = useAuthStore();
  const { logoutModalIsOpen, setLogoutModalIsOpen } = useAppStore();

  const { setTheme, theme } = useTheme();

  const isMobile = useIsMobile();

  const isAdmin = user?.role === "ADMIN";

  const toggleAdminItem = (title: string) => {
    setOpenAdminItems((currentItems) =>
      currentItems.includes(title)
        ? currentItems.filter((item) => item !== title)
        : [...currentItems, title]
    );
  };

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

        {isAdmin && (
          <>
            <SidebarSeparator />

            <SidebarGroup>
              <SidebarGroupLabel>Management</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {adminNavItems.map((item) => {
                    const hasSubItems = item.subItems && item.subItems.length > 0

                    const isItemActive =
                      pathname === item.href ||
                      item.subItems?.some((subItem) => pathname === subItem.href);

                    const isOpen = openAdminItems.includes(item.title) || isItemActive;

                    return (
                      <SidebarMenuItem key={item.title}>
                        {hasSubItems ? (
                          <SidebarMenuButton
                            isActive={isItemActive}
                            tooltip={item.title}
                            onClick={() => toggleAdminItem(item.title)}
                            aria-expanded={isOpen}
                          >
                            <item.icon />
                            <span>{item.title}</span>
                            <ChevronDown
                              className={`ml-auto transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                                }`}
                            />
                          </SidebarMenuButton>
                        ) : (
                          <SidebarMenuButton
                            asChild
                            isActive={pathname === item.href}
                            tooltip={item.title}
                          >
                            <Link href={item.href || "#"}>
                              <item.icon />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        )}

                        {hasSubItems && <div
                          className={`grid transition-[grid-template-rows,opacity] duration-200 ease-in-out ${isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                          <div className="min-h-0 overflow-hidden">
                            <SidebarMenuSub>
                              {item.subItems?.map((subItem) => (
                                <SidebarMenuSubItem key={subItem.title}>
                                  <SidebarMenuSubButton
                                    asChild
                                    isActive={pathname === subItem.href}
                                  >
                                    <Link href={subItem.href}>
                                      <subItem.icon />
                                      <span>{subItem.title}</span>
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </div>
                        </div>}
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        )}
      </SidebarContent>

      <SidebarFooter />
      <SidebarRail />

      <SidebarGroup>
        <SidebarGroupLabel>Account</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem className="cursor-pointer">
              <SidebarMenuButton tooltip="User">
                <div className="flex items-center w-full gap-5">
                  <User size={12} />
                  <span className="text-sm">{user?.role}</span>

                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
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
