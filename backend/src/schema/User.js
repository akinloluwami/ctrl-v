const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  displayImage: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isProMember: {
    type: Boolean,
    default: false,
  },
  connectedDevices: {
    type: Array,
    default: [],
  },
  otp: {
    type: String,
    default: "",
  },
  otpExpiry: {
    type: Date,
    default: Date.now,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  subcriptionExpiry: {
    type: Date,
  },
});

module.exports = mongoose.model("User", userSchema);
