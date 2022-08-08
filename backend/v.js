const connect = require("./src/db/db");
connect;
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const authRouter = require("./src/routes/auth");

app.use("/auth", authRouter);

const port = process.env.PORT || 1917;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
