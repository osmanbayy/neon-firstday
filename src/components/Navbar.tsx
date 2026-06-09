"use client"
import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { NavigationMenuDemo } from "./NavigationMenu";
import { useAuthStore } from "@/lib/stores/authStore";
import Image from "next/image";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { LogoutConfirmModal } from "./modals/LogoutConfirmModal";

export const Navbar: React.FC = () => {
  const { user } = useAuthStore();

  const [logoutModalIsOpen, setLogoutModalIsOpen] = useState<boolean>(false);
  return (
    <nav className="bg-white dark:bg-stone-950 shadow-md border-b border-gray-200 dark:border-gray-700 rounded-bl-lg rounded-br-lg fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-12 py-6 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Neon Apps
        </div>
        <div className="flex items-center gap-4 max-sm:hidden">
          {/* Add navigation links here if needed */}
          <NavigationMenuDemo />
        </div>
        <div className="flex gap-2 items-center">
          <ThemeToggle />

          {user && <div className="flex gap-2 items-center">
            <div className="size-8 border rounded-full flex justify-center items-center">
              <Image src={"/next.svg"} width={32} height={32} alt={user.name} className="dark:invert object-cover" />
            </div>
            <Button
              variant={"outline"}
              className="cursor-pointer"
              onClick={() => setLogoutModalIsOpen(true)}
            >
              Logout <LogOut size={12} />
            </Button>
          </div>}

          <LogoutConfirmModal logoutModalIsOpen={logoutModalIsOpen} setLogoutModalIsOpen={setLogoutModalIsOpen} />
        </div>
      </div>
    </nav>
  );
}