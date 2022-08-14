const express = require("express");
const router = express.Router();
const Link = require("../controllers/link");

router.post("/", Link.sendLink);
router.get("/", Link.getLinks);

module.exports = router;
