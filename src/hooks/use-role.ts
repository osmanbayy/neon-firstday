import { useAuth } from "./use-auth"

export type Role = "ADMIN" | "USER"

export function useHasRole() {
  const { user } = useAuth();

  return (...roles: Role[]) => roles.includes(user?.role as Role)
}