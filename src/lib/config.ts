import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.url(),
  JWT_SECRET: z.string().min(10),
  API_TIMEOUT_MS: z.string().regex(/^\d+$/).transform(Number),
  NEXT_PUBLIC_APP_URL: z.url(),
  NEXT_PUBLIC_API_URL: z.url(),
  MOCK_CORRECT_EMAIL: z.email(),
  MOCK_CORRECT_PASSWORD: z.string().min(8).regex(/[A-Z]/).regex(/[^A-Za-z0-9]/),

  PORT: z.string().regex(/^\d+$/).transform(Number),

  NODE_ENV: z.enum([
    "development",
    "production",
    "test",
  ]),

});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "Invalid environment variables:\n",
    parsed.error.issues.map(issue => issue.message)
  );

  throw new Error(
    "Environment validation failed.:"
  );
}
export const config = parsed.data;