import { create } from "zustand";
import { persist } from "zustand/middleware";

import { login as mockLogin } from "@/lib/auth";
import { LoginSchema } from "@/lib/schemas/login";

export interface User {
  id: string;
  email: string;
  name: string;
  role: "ADMIN" | "USER";
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;

  login: (credentials: LoginSchema) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      error: null,
      isAuthenticated: false,

      login: async (credentials: LoginSchema) => {
        set({ isLoading: true, error: null });

        try {
          const response = await mockLogin(credentials);

          if (response.success && response.user) {
            const user: User = {
              id: response.user.id,
              email: response.user.email,
              name: response.user.name,
              role: response.user.role,
            };

            set({
              user,
              isAuthenticated: true,
              isLoading: false,
            });

            return true;
          }

          set({
            error: response.error || response.message,
            isLoading: false,
          });

          return false;
        } catch (err) {
          set({
            error:
              err instanceof Error
                ? err.message
                : "An error occurred during login",
            isLoading: false,
          });

          return false;
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          error: null,
          isLoading: false,
        });
      },

      clearError: () => set({ error: null }),

      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),
    }),
    {
      name: "neon-auth-storage",
    }
  )
);