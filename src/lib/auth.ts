import { config } from "./config";
import { LoginSchema } from "./schemas/login";

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: {
    email: string;
    name: string;
    id: string;
  };
  error?: string;
}

export const login = async (data: LoginSchema): Promise<AuthResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const { email, password } = data;

  if (email == config?.MOCK_CORRECT_EMAIL && password === config.MOCK_CORRECT_PASSWORD) {
    return {
      success: true,
      message: "Welcome Back",
      user: { 
        id: "uuid-1907",
        email: config.MOCK_CORRECT_EMAIL,
        name: config.MOCK_CORRECT_EMAIL.split("@")[0]
      }
    }
  }

  return {
    success: false,
    message: "Login failed!",
    error: "Email or password is incorrect"
  }
}