import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";
import { generateToken } from "../middlewares/auth.middleware.js";
import { encryPassword } from "../utils/hashPassword.js";
import ApiResponse from "../utils/apiResponse.js";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import mongoose from "mongoose";
import { deleteOnCloudinary, uploadOnCloudinary } from "../utils/cloudinary.js";

//=================== Sign Up ===================
const signup = asyncErrorHandler(async (req, res) => {
  const getData = req.body;
  const checkUserName = await User.findOne({ username: getData.username });
  const checkEmail = await User.findOne({ email: getData.email });

  // ------------------ check duplicate username and email ------------------
  if (checkUserName) {
    // ------------------ throwing error in ApiError.js file ------------------
    throw new ApiError(400, "error", "username already exists");
  } else if (checkEmail) {
    throw new ApiError(400, "error", "email already exists");
  } else {
    const newUser = new User(getData);
    const data = await newUser.save();

    const payload = {
      _id: data._id,
      name: data.name,
      username: data.username,
      email: data.email,
    };
    // -------------- Generate Token ----------------
    const token = generateToken(payload);

    // ------------- Password Remove ---------
    const userData = data.toObject();
    delete userData.password;
    res.status(200).json(new ApiResponse(200, userData, "success", token));
  }
});

// =================== Log in ===================
const login = asyncErrorHandler(async (req, res) => {
  const { email, password } = req.body;

  // ---------- check email and password exists or not ---------
  const user = await User.findOne({ email: email });

  if (!user || !(await user.comparePassword(password))) {
    // ------------------ throwing error in errorHandler.js file ------------------

    throw new ApiError(401, "error", "email or password doesn't exists");
  }
  // ------------ Generate Token ----------
  const payload = {
    _id: user._id,
    name: user.name,
    username: user.username,
    email: user.email,
  };
  const token = generateToken(payload);
  // ------------ Password Remove ----------
  const userData = user.toObject();
  delete userData.password;
  // ------------------ response send -------------
  res.status(200).json(new ApiResponse(200, userData, "success", token));
});

// =================== Reset Password ===================
const resetPassword = asyncErrorHandler(async (req, res) => {
  const { id } = req.params;
  const { password, newPassword } = req.body;
  const user = await User.findById(id);
  if (!user) {
    throw new ApiError(404, "fail", "user not found");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new ApiError(404, "fail", "password incorrect");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });
  // const hashedPassword = await encryPassword(newPassword);

  // const user = await User.findOneAndUpdate(
  //   {
  //     _id: id,
  //   },
  //   {
  //     password: hashedPassword,
  //   },
  //   {
  //     new: true,
  //   }
  // );

  res
    .status(200)
    .json(new ApiResponse(200, null, "password changed successfully"));
});

// =================== Update User Profile ===================
const updateUserProfile = asyncErrorHandler(async (req, res) => {
  // const { id } = req.params;
  const id = req.user._id;

  // ---------------- Check username exist or not -----------------
  const existUsername =
    (await User.findOne({ username: req.body.username })) || {};
  if (existUsername.username === (req.body.username || false)) {
    throw new ApiError(401, "fail", "username already exist");
  }
  // ---------------- Check email exist or not ------------
  const existEmail = (await User.findOne({ email: req.body.email })) || {};
  if (existEmail.email === (req.body.email || false)) {
    throw new ApiError(401, "fail", "email already exist");
  }

  const updateUser = await User.findByIdAndUpdate(id, req.body, {
    returnNewDocument: true,
    new: true,
  });

  if (!updateUser) {
    throw new ApiError(404, "fail", "user not found");
  }
  // ------------- Password Remove ----------
  const userData = updateUser.toObject();
  delete userData.password;
  res
    .status(200)
    .json(new ApiResponse(200, userData, "user details updated successfully"));
});

// =================== Delete User Profile ===================
const deleteUserProfile = asyncErrorHandler(async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  const user = await User.findOne({ _id: id });

  // ------------- user exist or not --------
  if (!user) {
    throw new ApiError(404, "fail", "user not found");
  }

  // ------------ Enter password before deleting account ----------
  // -------------- compare password -----------------
  if (!password) {
    throw new ApiError(401, "fail", "please enter password correctly");
  }
  const userPassword = await user.comparePassword(password);

  // ------------- check password correct or wrong --------------
  if (!userPassword) {
    throw new ApiError(401, "fail", "wrong password");
  }
  const deleteUser = await User.findByIdAndDelete({ _id: id });
  let DeleteId = deleteUser._id.toString();

  if (!deleteUser) {
    throw new ApiError(404, "fail", "user not found");
  }

  const publicId = user.profilePic.split("/").pop().split(".")[0]; //get public id from profile image url
  // ---------------------- Delete profile image from cloudinary --------------
  const response = await deleteOnCloudinary(publicId);

  // ----------------- Delete All Data ----------------------
  const deleteAllData = await Conversation.deleteMany({
    members: { $in: [new mongoose.Types.ObjectId(DeleteId)] },
  });

  await Message.deleteMany({
    $or: [
      { senderId: new mongoose.Types.ObjectId(DeleteId) },
      { receiverId: new mongoose.Types.ObjectId(DeleteId) },
    ],
  });

  res
    .status(200)
    .json(new ApiResponse(200, null, "account deleted successfully"));
});

// =================== Get User Profile ===================
const getUserProfile = asyncErrorHandler(async (req, res) => {
  // const { id } = req.params;
  const id = req.user._id;
  const getUser = await User.findById({ _id: id }).select("-password");

  if (!getUser) {
    throw new ApiError(404, "fail", "user not found");
  }
  // ------------- Password Remove ----------
  // const userData = getUser.toObject();
  // delete userData.password;

  res.status(200).json(new ApiResponse(200, getUser));
  // res.status(200).json(new ApiResponse(200, userData));
});

// =================== Get All User Profile ===================
const getAllUserProfile = asyncErrorHandler(async (req, res) => {
  const loggedInUser = req.user._id;
  const allUser = await User.find({ _id: { $ne: loggedInUser } }).select(
    "-password"
  );

  res.status(200).json(new ApiResponse(200, allUser));
  // res.status(200).json(allUser);
});

// =================== Upload Profile Picture ===================
const uploadProfilePicture = asyncErrorHandler(async (req, res) => {
  const loggedInUser = req.user._id;

  const profileImagePath = await User.findOne({ _id: loggedInUser }); // store image old path

  const profileLocalPath = req.file.path;

  const profilePic = await uploadOnCloudinary(profileLocalPath);

  // -------------- Update image path in mongodb -------------
  const newResponse = await User.findByIdAndUpdate(
    loggedInUser,
    { profilePic: profilePic?.url || "" },
    {
      returnNewDocument: true,
      new: true,
    }
  );
  if (!newResponse) {
    throw new ApiError(
      500,
      "fail",
      "Something went wrong while uploading the profile picture"
    );
  }
  // ---------------- Delete old image from cloudinary -----------
  if (profileImagePath.profilePic) {
    const publicId = profileImagePath.profilePic.split("/").pop().split(".")[0];
    // ---------------- Delete image from cloudinary -----------
    const response = await deleteOnCloudinary(publicId);
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { profilePic: newResponse.profilePic },
        "Profile Change Successfully"
      )
    );
});

// ================= Remove Profile Picture ================
const removeProfilePicture = asyncErrorHandler(async (req, res) => {
  const userId = req.user._id;

  const profileImagePath = await User.findOne({ _id: userId }); //get user data for profile image path

  if (!profileImagePath.profilePic) {
    throw new ApiError(201, "success", "Profile Change Successfully");

    // ---------------- some problem this code ------------
    // res.status(200).json(
    //   new ApiResponse(
    //     200,
    //     {
    //       profilePic: "",
    //     },
    //     "Profile Change Successfully"
    //   )
    // );
  }

  const publicId = profileImagePath.profilePic.split("/").pop().split(".")[0]; //get public id from image url
  // ---------------------- Delete profile image from cloudinary --------------
  const response = await deleteOnCloudinary(publicId);

  await User.findByIdAndUpdate(userId, {
    profilePic: "",
  });

  res.status(200).json(
    new ApiResponse(
      200,
      {
        profilePic: "",
      },
      "Profile Change Successfully"
    )
  );
});

// =================== Export ===================
export {
  signup,
  login,
  resetPassword,
  updateUserProfile,
  deleteUserProfile,
  getUserProfile,
  getAllUserProfile,
  uploadProfilePicture,
  removeProfilePicture,
};
