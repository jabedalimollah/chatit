import { z } from "zod";

const updateUserSchema = z.object({
  // --------------- name -------------
  name: z
    .string({
      invalid_type_error: "name must be a string",
    })
    .trim()
    .min(2, { message: "name must be at least 2 characters" })
    .max(20, { message: "name must be at maximum 20 characters" })
    .regex(
      /^[a-zA-Z0-9\s]+$/,
      "name must not contain special characters"

      // /^[A-Za-z.-]+(\s*[A-Za-z.-]+)*$/,
      // "name must not contain special characters and numbers"
    )
    .optional(),

  // --------------- username -------------
  username: z
    .string({
      invalid_type_error: "username must be a string",
    })
    .trim()
    .min(2, { message: "username must be at least 2 characters" })
    .max(20, { message: "username must be at maximum 20 characters" })
    .toLowerCase()

    .optional(),

  // --------------- email -------------
  email: z
    .string({
      invalid_type_error: "email must be a string",
    })
    .email({ message: "Invalid email address" })
    .trim()
    .toLowerCase()
    .optional(),

  // ------------------ Profile Picture ----------------
  profilePic: z.string().optional(),

  // ------------------ about ----------------
  about: z.string().optional(),
});

export default updateUserSchema;
