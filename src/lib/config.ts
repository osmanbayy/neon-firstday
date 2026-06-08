import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.url(),
  JWT_SECRET: z.string().min(10),
  API_TIMEOUT_MS: z.string().regex(/^\d+$/).transform(Number),
  NEXT_PUBLIC_APP_URL: z.url(),
  PORT: z.string().regex(/^\d+$/).transform(Number),

  NODE_ENV: z.enum([
    "development",
    "production",
    "test",
  ]),

  NEXT_PUBLIC_API_URL: z.url(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "Invalid environment variables:\n",
    parsed.error.format()
  );

  throw new Error(
    "Environment validation failed."
  );
}

export const config = parsed.data;