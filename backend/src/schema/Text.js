const mongoose = require("mongoose");

const TextSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
});

module.exports = mongoose.model("Text", TextSchema);
