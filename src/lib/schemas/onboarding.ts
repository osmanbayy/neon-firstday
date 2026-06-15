import z from "zod";

export const identitySchema =
  z.object({
    firstName: z
      .string()
      .min(2),

    lastName: z
      .string()
      .min(2),

    zodiac: z.string(),
  });

export const professionalSchema =
  z.object({
    department: z.string(),

    role: z
      .string()
      .min(3),
  });

export type IdentityForm =
  z.infer<typeof identitySchema>;

export type ProfessionalForm =
  z.infer<typeof professionalSchema>