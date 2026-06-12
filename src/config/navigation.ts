import { Activity, BarChart3, Briefcase, Calendar, Clock, CreditCardIcon, Home, List, ListChecks, ListTodo, Settings, SettingsIcon, TrendingUp, UserIcon, Users, type LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export type AdminNavItem = {
  title: string,
  href: string,
  icon: LucideIcon,
  subItems: NavItem[]
}

export type UserDropdownItem = {
  title: string,
  href: string,
  icon: LucideIcon
}

export const mainNavItems: NavItem[] = [
  { title: "Home", href: "/home", icon: Home },
  { title: "Team", href: "/members", icon: Users },
  { title: "Projects", href: "/", icon: Briefcase },
  { title: "Daily Meeting", href: "/meeting", icon: Calendar },
  { title: "Activity Feed", href: "/activity-feed", icon: Activity }
];

export const adminNavItems: AdminNavItem[] = [
  {
    title: "Tasks",
    href: "/",
    icon: ListChecks,
    subItems: [
      { title: "All Tasks", href: "/tasks", icon: List },
      { title: "Completed Tasks", href: "/tasks/completed", icon: ListTodo },
      { title: "Pending Tasks", href: "/tasks/pending", icon: Clock },
    ]
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    subItems: [
      { title: "Sales Reports", href: "/analytics/sales", icon: TrendingUp },
      { title: "User Activity", href: "/analytics/activity", icon: Activity },
    ]
  },
]

export const secondaryNavItems: NavItem[] = [
  { title: "Settings", href: "#", icon: Settings },
];

export const userDropdownItems: UserDropdownItem[] = [
  { title: "Profile", href: "/", icon: UserIcon },
  { title: "Billing", href: "/", icon: CreditCardIcon },
  { title: "Settings", href: "/", icon: SettingsIcon },
]
