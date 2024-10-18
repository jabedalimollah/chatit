import express from "express";
import {
  getAllUserProfile,
  deleteUserProfile,
  getUserProfile,
  login,
  resetPassword,
  signup,
  updateUserProfile,
  uploadProfilePicture,
  removeProfilePicture,
} from "../controllers/user.controller.js";
const router = express.Router();
import { userValidation } from "../middlewares/validation.middleware.js";
import { signUpSchema } from "../schemas/signup.schema.js";
import loginSchema from "../schemas/login.schema.js";
import { jwtAuthMiddleware } from "../middlewares/auth.middleware.js";
import resetPasswordSchema from "../schemas/resetPassword.schema.js";
import updateUserSchema from "../schemas/updateUser.schema.js";
import { upload } from "../middlewares/multer.middleware.js";

// =============== Router ===============

// --------------- signup --------------
router.post("/signup", userValidation(signUpSchema), signup);

// --------------- log in -------------
router.post("/login", userValidation(loginSchema), login);

// ------------- Reset Password ---------
router.put(
  "/resetpassword/:id",
  userValidation(resetPasswordSchema),
  resetPassword
);

// ------------- Update User Profile ----------
router.put(
  // "/updateuser/:id",
  "/updateuser",
  jwtAuthMiddleware,
  userValidation(updateUserSchema),
  updateUserProfile
);

// ---------------- Get User Profile ------------
router.get("/userprofile", jwtAuthMiddleware, getUserProfile);
// router.get("/userprofile/:id", jwtAuthMiddleware, getUserProfile);

// ---------------- Get All User Profile ------------
router.get("/alluserprofile", jwtAuthMiddleware, getAllUserProfile);

// ---------------- Delete User Profile ------------
router.delete("/deleteuser/:id", jwtAuthMiddleware, deleteUserProfile);

// ---------------- Upload User Profile Picture ------------
router.post(
  "/uploadprofilepic",
  jwtAuthMiddleware,
  upload.single("profilePic"),
  // upload.fields([{ name: "profilePic", maxCount: 1 }]),
  uploadProfilePicture
);

// ---------------- Upload User Profile Picture ------------
router.delete("/deleteprofilepic", jwtAuthMiddleware, removeProfilePicture);

// --------------- Export Router --------------
export default router;
