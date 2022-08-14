require("dotenv").config();
const Text = require("../schema/Text");
const jwt = require("jsonwebtoken");
const User = require("../schema/User");

const sendText = async (req, res) => {
  const { tkn, deviceToken } = req.headers;
  const { text } = req.body;
  if (!tkn) {
    return res.status(400).json({
      error: "Token is required",
    });
  }
  const decoded = jwt.verify(tkn, process.env.JWT_SECRET);
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
  const { tkn, deviceToken } = req.headers;
  if (!tkn) {
    return res.status(400).json({
      error: "Token is required",
    });
  }
  const decoded = jwt.verify(tkn, process.env.JWT_SECRET);
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
