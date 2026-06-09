import { create } from "zustand";
import { login as mockLogin } from "@/lib/auth";
import { LoginSchema } from "@/lib/schemas/login";

export interface User {
  id: string;
  email: string;
  name: string;
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

// Get mock user from local storage
const getInitialUser = (): User | null => {
  try {
    const initialUser = localStorage.getItem("neon_auth_user");
    return initialUser ? (JSON.parse(initialUser) as User) : null;
  } catch {
    return null;
  }
};

export const useAuthStore = create<AuthState>((set) => ({
  user: getInitialUser(),
  isLoading: false,
  error: null,
  isAuthenticated: getInitialUser() !== null,

  login: async (credentials: LoginSchema) => {
    set({ isLoading: true, error: null });
    try {
      const response = await mockLogin(credentials);

      if (response.success && response.user) {
        const user: User = {
          id: response.user.id,
          email: response.user.email,
          name: response.user.name,
        };

        localStorage.setItem("neon_auth_user", JSON.stringify(user))

        set({ user, isAuthenticated: true, isLoading: false });

        return true;
      } else {
        set({ error: response.error || response.message, isLoading: false });
        return false;
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred during login";
      set({ error: errorMessage, isLoading: false });
      return false;
    }
  },

  logout: () => {
    try {
      if (typeof window !== "undefined") localStorage.removeItem("neon_auth_user");
    } catch { }
    set({ user: null, isAuthenticated: false, error: null, isLoading: false });
  },

  clearError: () => set({ error: null }),

  setUser: (user: User | null) => {
    if (user) localStorage.setItem("neon_auth_user", JSON.stringify(user));
    else localStorage.removeItem("neon_auth_user");

    set({ user, isAuthenticated: user !== null });
  },
}));
