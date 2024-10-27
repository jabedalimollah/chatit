import { getReceiverSocketId, io } from "../app.js";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";

const sendMessage = asyncErrorHandler(async (req, res) => {
  const { message } = req.body;
  const receiverId = req.params.id;
  const isReceiverIdExists = await User.findById(receiverId);
  if (!isReceiverIdExists) {
    throw new ApiError(401, "error", "user doesn't exists");
  }
  const senderId = req.user._id;
  let conversation = await Conversation.findOne({
    members: { $all: [senderId, receiverId] },
  });
  if (!conversation) {
    conversation = await Conversation.create({
      members: [senderId, receiverId],
    });
  }

  const newMessage = await Message.create({
    senderId,
    receiverId,
    message,
  });
  if (newMessage) {
    conversation.messages.push(newMessage._id);
  }
  await Promise.all([conversation.save(), newMessage.save()]);
  // ---------- Use getReceiverSocketId and io ---------------
  const receiverSocketId = getReceiverSocketId(receiverId);
  if (receiverSocketId) {
    io.to(receiverSocketId).emit("newMessage", newMessage);
  }

  res
    .status(200)
    .json(new ApiResponse(200, newMessage, "Message sent successfully"));
});

const receiveMessage = asyncErrorHandler(async (req, res) => {
  const receiverId = req.params.id;
  const senderId = req.user._id;
  const isReceiverIdExists = await User.findById(receiverId);
  if (!isReceiverIdExists) {
    throw new ApiError(401, "error", "user doesn't exists");
  }
  let conversation = await Conversation.findOne({
    members: { $all: [senderId, receiverId] },
  }).populate("messages");
  if (!conversation) {
    return res
      .status(201)
      .json({ status: 201, data: [], message: "no messages" });
    // res.status(201).json(new ApiResponse(201, [], "no messages"));
  }
  const messages = conversation.messages;

  res
    .status(200)
    .json(new ApiResponse(200, messages, "Message received successfully"));
});

export { sendMessage, receiveMessage };
