import { z } from "zod";

export const LoginSchema = z.object({
  login: z.string().trim(),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({

  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .trim(),

  email: z
    .string()
    .email({ message: "Invalid email address" })
    .trim(),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" })
    .trim(),
});
