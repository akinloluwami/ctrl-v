const connect = require("./src/db/db");
connect;
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload({ useTempFiles: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const authRouter = require("./src/routes/auth");
const linkRouter = require("./src/routes/link");
const boardRouter = require("./src/routes/board");
const textRouter = require("./src/routes/text");
const uploadRouter = require("./src/routes/upload");

app.use("/auth", authRouter);
app.use("/link", linkRouter);
app.use("/board", boardRouter);
app.use("/text", textRouter);
app.use("/upload", uploadRouter);

const port = process.env.PORT || 1917;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
