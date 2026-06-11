import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AppState {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
  logoutModalIsOpen: boolean;
  setLogoutModalIsOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      sidebarOpen: false,
      setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
      isMobile: false,
      setIsMobile: (isMobile: boolean) => set({ isMobile: isMobile }),
      logoutModalIsOpen: false,
      setLogoutModalIsOpen: (open: boolean) => set({ logoutModalIsOpen: open }),
    }),
    {
      name: "neon-app-storage",
      partialize: (state) => ({
        sidebarOpen: state.sidebarOpen,
        isMobile: state.isMobile,
        logoutModalIsOpen: state.logoutModalIsOpen,
      }),
    }
  )
)