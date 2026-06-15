import { useAuthStore } from "@/lib/stores/authStore";

export function useAuth() {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const isLoading = useAuthStore((state) => state.isLoading);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  return {
    user,
    isAuthenticated,
    isLoading,
    hasHydrated,
    login,
    logout,
  } as const;
}
