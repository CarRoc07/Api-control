import { z } from "zod";

export const productSchema = z.object({
    product: z.string({
        required_error: "Name is required",
    }),
    stock: z.number({
        required_error: "Stock is required",
    }),
    costo: z.number({
        required_error: "Cost is required",
    }),
})