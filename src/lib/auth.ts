"use server"

import { DUMMY_USERS } from "./constants";
import { LoginSchema } from "./schemas/login";

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: {
    email: string;
    name: string;
    id: string;
    role: "ADMIN" | "USER";
  };
  error?: string;
}

export const login = async (
  data: LoginSchema
): Promise<AuthResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const { email, password } = data;

  const user = DUMMY_USERS.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Login failed!",
      error: "Email or password is incorrect",
    };
  }

  return {
    success: true,
    message: "Welcome Back",
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role as "ADMIN" | "USER",
    },
  };
};