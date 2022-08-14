require("dotenv").config();
const User = require("../schema/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const otp = crypto.randomBytes(4).toString("hex");
  const otpExpiry = new Date(Date.now() + 3600000);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const hashedConfirmPassword = await bcrypt.hash(confirmPassword, salt);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    confirmPassword: hashedConfirmPassword,
    otp,
    otpExpiry,
  });
  const emailExists = await User.findOne({ email });
  const passwordsMatch = await bcrypt.compare(password, hashedConfirmPassword);
  const validEmail = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  const validName = name.match(/^[a-zA-Z ]{2,30}$/);
  if (emailExists) {
    return res.status(400).json({
      error: "Email already exists",
    });
  }
  if (!validEmail) {
    return res.status(400).json({
      error: "Invalid email",
    });
  }
  if (!validName) {
    return res.status(400).json({
      error: "Name must be at least 2 characters and only contain letters",
    });
  }
  if (!passwordsMatch) {
    return res.status(400).json({
      error: "Passwords do not match",
    });
  }
  try {
    const savedUser = await user.save();
    const { _id } = savedUser;
    const token = jwt.sign({ _id }, process.env.JWT_SECRET);
    res.status(201).json({
      token,
      user: { _id, name, email },
      message: "User created successfully",
      otp,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      error: "Email or password is incorrect",
    });
  }
  const passwordsMatch = await bcrypt.compare(password, user.password);
  if (!passwordsMatch) {
    return res.status(400).json({
      error: "Email or password is incorrect",
    });
  }
  const isEmailVerified = user.isEmailVerified;
  if (!isEmailVerified) {
    return res.status(400).json({
      error: "Email is not verified",
    });
  }
  const connectedDevices = user.connectedDevices;
  const isProMember = user.isProMember;

  const currentDevice = crypto.randomBytes(16).toString("hex");
  if (connectedDevices.length > 1 && !isProMember) {
    return res.status(400).json({
      error: "You have reached the maximum number of devices",
    });
  }
  if (connectedDevices.includes(currentDevice)) {
    return res.status(400).json({
      error: "You are already connected to this device",
    });
  }
  connectedDevices.push(currentDevice);
  user.connectedDevices = connectedDevices;
  await user.save();
  const { _id } = user;
  const token = jwt.sign({ _id }, process.env.JWT_SECRET);
  res.status(200).json({
    token,
    message: "Logged in successfully",
    deviceToken: currentDevice,
  });
};

const verifyEmail = async (req, res) => {
  const otp = req.body.otp;

  const user = await User.findOne({ otp });
  if (!user) {
    return res.status(400).json({
      error: "OTP is incorrect",
    });
  }
  const otpExpiry = user.otpExpiry;
  if (otpExpiry < Date.now()) {
    return res.status(400).json({
      error: "OTP has expired",
    });
  }
  user.isEmailVerified = true;
  user.otp = "";
  user.otpExpiry = "";
  await user.save();
  res.status(200).json({
    message: "Email verified successfully",
  });
};

const resendOTP = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      error: "Email does not exist",
    });
  }
  const otp = crypto.randomBytes(4).toString("hex");
  const otpExpiry = new Date(Date.now() + 3600000);
  user.otp = otp;
  user.otpExpiry = otpExpiry;
  await user.save();
  res.status(200).json({
    message: "OTP sent successfully",
    otp,
  });
};

const logout = async (req, res) => {
  const { deviceToken } = req.body;
  const user = await User.findOne({ connectedDevices: deviceToken });
  if (!user) {
    return res.status(400).json({
      error: "Device does not exist",
    });
  }
  const connectedDevices = user.connectedDevices;
  connectedDevices.pop(deviceToken);
  user.connectedDevices = connectedDevices;
  await user.save();
  res.status(200).json({
    message: "Logged out successfully",
  });
};

module.exports = {
  signup,
  login,
  verifyEmail,
  resendOTP,
  logout,
};
