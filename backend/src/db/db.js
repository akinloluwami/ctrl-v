require("dotenv").config();
const mongoose = require("mongoose");

(async function connectDB() {
  const db = await mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Connected to ${db.connection.host}`);
})();

module.exports = mongoose;
