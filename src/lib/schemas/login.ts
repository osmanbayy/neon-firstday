import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Geçerli bir email gir"),
  password: z.string().min(6, "Şifre en az 6 karakter olmalı"),
});

export type LoginSchema = z.infer<typeof loginSchema>;