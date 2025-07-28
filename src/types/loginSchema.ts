import z from "zod";

export const loginSchema = z.object({
  email: z.email().min(1, "campo obrigatório"),
  password: z.string().min(1, "campo obrigatório"),
})

export type LoginSchema = z.infer<typeof loginSchema>