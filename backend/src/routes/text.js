const express = require("express");
const router = express.Router();
const Text = require("../controllers/text");

router.post("/", Text.sendText);
router.get("/", Text.getTexts);

module.exports = router;
