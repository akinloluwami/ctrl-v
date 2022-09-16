const express = require("express");
const router = express.Router();
const Upload = require("../controllers/upload");

router.post("/", Upload.uploadFile);
router.get("/", Upload.getFiles);

module.exports = router;
