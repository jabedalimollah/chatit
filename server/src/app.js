import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import ApiError from "./utils/ApiError.js";
import errorHandler from "./utils/errorHandler.js";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return users[receiverId];
};

const users = {};
io.on("connection", (socket) => {
  // console.log("User connected", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId) {
    users[userId] = socket.id;
    // console.log("hello", users);
  }
  io.emit("getOnlineUsers", Object.keys(users));
  socket.on("disconnect", () => {
    // console.log("User disconnected", socket.id);
    delete users[userId];
    io.emit("getOnlineUsers", Object.keys(users));
  });
});

// ----------- Middlewares ----------
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    // extended: true,
    extended: false,
  })
);
app.use(express.static("public"));

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
export { app, io, server };
