import express from "express";
import {
  receiveMessage,
  sendMessage,
} from "../controllers/message.controller.js";

import { jwtAuthMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/send/:id", jwtAuthMiddleware, sendMessage);
router.get("/receive/:id", jwtAuthMiddleware, receiveMessage);

export default router;
