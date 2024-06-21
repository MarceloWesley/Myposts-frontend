import { z } from "zod";

export const commentsSchema = z.object({
  content: z
    .string()
    .min(3, "content must be at least 3 characters long")
    .max(3000, "content must be a maximum of 2000 characters"),
});
