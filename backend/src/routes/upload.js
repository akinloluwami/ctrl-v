const express = require("express");
const router = express.Router();
const Upload = require("../controllers/upload");

router.post("/", Upload.uploadFile);

module.exports = router;
