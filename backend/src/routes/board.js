const express = require("express");
const router = express.Router();
const Board = require("../controllers/board");

router.get("/", Board.getData);
