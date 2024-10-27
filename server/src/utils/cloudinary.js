import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

//================== Configuration ================
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ============== Upload an image ==================
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //--------------- upload the file on cloudinary -------------
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // ----------- file has been uploaded successfull -------------
    // console.log("file is uploaded on cloudinary", await response.url);
    // fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    // fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

// ============== Delete an image ==================
const deleteOnCloudinary = async (publicId) => {
  //   console.log("publicId", publicId);
  try {
    const result = await cloudinary.uploader.destroy(
      publicId,
      (error, result) => {
        // console.log(error, result);
        return result;
      }
    );
  } catch (error) {
    // console.log("error", error);
    return null;
  }
};

export { uploadOnCloudinary, deleteOnCloudinary };
