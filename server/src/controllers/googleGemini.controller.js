import { GoogleGenerativeAI } from "@google/generative-ai";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import ApiResponse from "../utils/apiResponse.js";
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: process.env.AI_MODEL });

const askAI = asyncErrorHandler(async (req, res) => {
  const result = await model.generateContent(req.body.message);

  res.status(200).json(new ApiResponse(200, result.response.text(), "success"));
});

export { askAI };
