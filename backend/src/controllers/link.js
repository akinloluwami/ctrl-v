require("dotenv").config();
const Link = require("../schema/Link");
const jwt = require("jsonwebtoken");
const User = require("../schema/User");

const sendLink = async (req, res) => {
  const { tkn, deviceToken } = req.headers;
  const { link } = req.body;
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
  const newLink = new Link({
    link,
    userId: _id,
  });
  await newLink.save();
  res.status(200).json({
    message: "Link sent successfully",
  });
};

const getLinks = async (req, res) => {
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
  const links = await Link.find({ userId: _id });
  res.status(200).json({
    links,
  });
};

module.exports = { sendLink, getLinks };
