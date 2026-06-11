import { Briefcase, CreditCardIcon, Home, ListChecks, Settings, SettingsIcon, UserIcon, Users, type LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export type UserDropdownItem = {
  title: string,
  href: string,
  icon: LucideIcon
}

export const mainNavItems: NavItem[] = [
  { title: "Home", href: "/", icon: Home },
  { title: "Team", href: "/", icon: Users },
  { title: "Projects", href: "/", icon: Briefcase },
  { title: "Tasks", href: "/", icon: ListChecks },

];

export const secondaryNavItems: NavItem[] = [
  { title: "Settings", href: "#", icon: Settings },
];

export const userDropdownItems: UserDropdownItem[] = [
  { title: "Profile", href: "/", icon: UserIcon },
  { title: "Billing", href: "/", icon: CreditCardIcon },
  { title: "Settings", href: "/", icon: SettingsIcon },
]
