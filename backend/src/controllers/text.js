require("dotenv").config();
const Text = require("../schema/Text");
const jwt = require("jsonwebtoken");
const User = require("../schema/User");

const sendText = async (req, res) => {
  const { deviceToken } = req.query;
  const tkn = req.headers.authorization;
  const { text } = req.body;
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
  const isProMember = user.isProMember;
  const maxLength = text.split(" ").length > 250;
  if (maxLength && !isProMember) {
    return res.status(400).json({
      error: "Word limit is 250",
    });
  }
  const newText = new Text({
    text,
    userId: _id,
  });
  await newText.save();
  res.status(200).json({
    message: "Text sent successfully",
  });
};

const getTexts = async (req, res) => {
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
  const texts = await Text.find({ userId: _id });
  res.status(200).json({
    texts,
  });
};

module.exports = {
  sendText,
  getTexts,
};
