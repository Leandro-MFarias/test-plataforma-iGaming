import z from "zod";

export const registerSchema = z.object({
  email: z.email().min(1, "campo obrigatório"),
  name: z.string().min(1, "campo obrigatório"),
  password: z.string().min(1, "campo obrigatório"),
  confirm: z.string(),
}).refine(data => data.password === data.confirm, {
  message: "As senhas precisam ser iguais",
  path: ["confirm"],
})

export type RegisterSchema = z.infer<typeof registerSchema>