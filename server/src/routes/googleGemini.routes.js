import express from "express";
import { jwtAuthMiddleware } from "../middlewares/auth.middleware.js";
import { askAI } from "../controllers/googleGemini.controller.js";
const router = express.Router();

router.post("/ask", jwtAuthMiddleware, askAI);

export default router;
