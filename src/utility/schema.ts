import { z } from 'zod'


export const registerSchema = z.object({
    fullname: z
        .string()
        .min(3, { message: "The username must be 4 characters or more" })
        .max(10, { message: "The username must be 10 characters or less" }),
    email: z.string()
        .email().trim().max(15).min(5).toLowerCase(),
    password: z
        .string()
        .min(6, { message: "Password must be atleast 6 characters" }),
    terms: z
        .literal(true, {
            errorMap: () => ({ message: "Accept our Terms and Conditions" }),
        }),
});

export const loginSchema = z.object({
    email: z.string()
        .email().trim().max(15).min(5).toLowerCase(),
    password: z
        .string()
        .min(6, { message: "Password must be atleast 6 characters" }),
});