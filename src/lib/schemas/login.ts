import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .email()
    .refine((value: string) => value.endsWith("@neonapps.com"), { message: "Email must end with @neonapps.com" }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters."
    })
    .regex(/[A-Z]/, {
      message: "Password must contain an uppercase letter."
    })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain a special letter"
    })
});

export type LoginSchema = z.infer<typeof loginSchema>;