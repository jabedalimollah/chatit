import { z } from "zod";
// ==================== Reset Password Schema ===============
const resetPasswordSchema = z.object({
  // ----------------- password ------------------
  password: z
    .string({
      required_error: "password is required",
      invalid_type_error: "password must be a string",
    })
    .trim()
    .min(6, { message: "password incorrect" }),
  // ----------------- New password ------------------
  newPassword: z
    .string({
      required_error: "new password is required",
      invalid_type_error: "new password must be a string",
    })
    .trim()
    .min(6, { message: "new password must be at least 6 characters" }),
});

export default resetPasswordSchema;
