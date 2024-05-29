import { z } from "zod";

export const registerUsersSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be a maximum of 20 characters")
    .regex(/^(?:[a-zA-Z_-]+(?:\d+)?|[0-9]+[a-zA-Z_-]+)$/, {
      message: "Invalid name",
    }),

  email: z
    .string()
    .email("Invalid email address")
    .regex(
      /^(?!\d+)([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+)@([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)$/,
      {
        message: "Invalid email",
      }
    ),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-])[A-Za-z0-9!@#$%^&*()_+=-]{8,}$/,
      {
        message:
          "The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
      }
    ),
});
