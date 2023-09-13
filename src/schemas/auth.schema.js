import { z } from "zod";

export const authSchema = z.object({
    email: z.string({
        required_error: "Email is required",
    }).email({message: "Email is invalid"}),
    password: z.string({
        required_error: "Password is required",
    }).min(7, {
        message: "Password must be at least 7 characters long",
    }).max(25, {
        message: "Password must be at most 25 characters long",
    }),
})