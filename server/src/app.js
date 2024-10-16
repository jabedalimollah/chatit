import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import ApiError from "./utils/ApiError.js";
import errorHandler from "./utils/errorHandler.js";
// import { jwtAuthMiddleware } from "./middlewares/auth.middleware.js";
const app = express();

// ----------- Middlewares ----------
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(bodyParser.json());

// --------- Import Routes -------------
import userRoute from "./routes/user.routes.js";
import messageRoute from "./routes/message.routes.js";
// ----------- Routes declaration ---------
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

// ----------- It is used for incorrect endpoint and wrong api requests ----------
app.use("*", (req, res, next) => {
  // =============== x ==================
  const err = new ApiError(
    404,
    "fail",
    `Can't find ${req.originalUrl} on the server`
  );
  next(err);
});

// ----------------- Error handler ---------
app.use(errorHandler);

// --------- Export ----------
export default app;
