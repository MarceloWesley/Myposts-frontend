import { z } from "zod";

export const postsSchema = z.object({
  title: z
    .string()
    .min(3, "title must be at least 3 characters long")
    .max(100, "title must be a maximum of 2000 characters"),

  content: z
    .string()
    .min(3, "content must be at least 3 characters long")
    .max(2000, "content must be a maximum of 2000 characters"),
});
