require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const User = require("../schema/User");
const jwt = require("jsonwebtoken");
const File = require("../schema/File");

const uploadFile = async (req, res) => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
  const token = req.headers.authorization;
  const { filename } = req.body;
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
      error: "User not found",
    });
  }
  const file = await req.files.upload;
  if (!file) {
    return res.status(400).json({
      error: "File is required",
    });
  }
  if (file.size > 1000000 && !user.isProMember) {
    return res.status(400).json({
      error:
        "File cannot be greater than 25MB, upgrade to pro to upload up to 200MB",
    });
  }
  const result = await cloudinary.uploader
    .upload(file.tempFilePath, {
      resource_type: "auto",
      folder: "uploads",
      public_id: `ctrlv_${user._id}${Date.now()}`,
    })
    .then(async (result) => {
      const supported = ["png", "mp4", "pdf", "jpg", "jpeg", "webp"];

      if (!supported.includes(result.format)) {
        return res.status(400).json({
          error: "File format not supported",
        });
      }
      const newFile = new File({
        fileUrl: result.secure_url,
        fileSize: result.bytes,
        fileType: result.resource_type,
        fileFormat: result.format,
        fileName: filename,
        userId: user._id,
      });
      await newFile.save();
      return res.status(201).json({
        message: "File uploaded successfully",
        newFile,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err.message,
      });
    });
};

const getFiles = async (req, res) => {
  const { deviceToken } = req.query;
  const tkn = req.headers.authorization;
  if (!tkn) {
    return res.status(400).json({
      error: "Token is required",
    });
  }
  const token = tkn.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const { _id } = decoded;
  const user = await User.findOne({ _id });
  if (!user) {
    return res.status(400).json({
      error: "User not found",
    });
  }
  const connectedDevices = user.connectedDevices;
  if (!connectedDevices.includes(deviceToken)) {
    return res.status(400).json({
      error: "You are not connected to this device",
    });
  }
  const files = await File.find({ userId: _id });
  res.status(200).json({
    files,
  });
};

module.exports = { uploadFile, getFiles };
