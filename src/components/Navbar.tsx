import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { NavigationMenuDemo } from "./NavigationMenu";

export const Navbar: React.FC = () => {
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
        <ThemeToggle />
      </div>
    </nav>
  );
}