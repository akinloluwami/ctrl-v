require("dotenv").config();
const jwt = require("jsonwebtoken");
const Link = require("../schema/Link");
const Text = require("../schema/Text");
const User = require("../schema/User");

const getData = async (req, res) => {
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
  const links = await Link.find({ userId: _id });
  const data = texts.concat(links);
  data.sort((a, b) => {
    return a.createdAt - b.createdAt;
  });
  if (data.length === 0) {
    return res.status(400).json({
      error: "No data found",
    });
  }
  res.status(200).json({
    data,
  });
};

module.exports = {
  getData,
};
