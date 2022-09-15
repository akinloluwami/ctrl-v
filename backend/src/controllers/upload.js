require("dotenv").config();
const cloudinary = require("cloudinary");
const User = require("../schema/User");
const jwt = require("jsonwebtoken");

const uploadFile = async (req, res) => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({
      message: "Token is required",
    });
  }
  const tkn = token.split(" ")[1];
  const decoded = jwt.verify(tkn, process.env.JWT_SECRET);
  const user = await User.findOne({
    where: {
      uuid: decoded.uuid,
    },
  });
  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }
  const file = await req.files.upload;
  if (!file) {
    return res.status(400).json({
      message: "File is required",
    });
  }
  if (file.size > 1000000 && !user.isProMember) {
    return res.status(400).json({
      message:
        "File cannot be greater than 25MB, upgrade to pro to upload up to 200MB",
    });
  }
  const result = await cloudinary.uploader
    .upload(file.tempFilePath, {
      folder: "uploads",
      public_id: `ctrlv_${user.uuid}${Date.now()}`,
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return res.status(400).json({
        message: "Error uploading image",
      });
    });
  return res.status(201).json({
    message: "File uploaded successfully",
    result,
  });
};

module.exports = { uploadFile };
