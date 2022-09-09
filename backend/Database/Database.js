const mongoose = require("mongoose");
const dotenv = require("dotenv");

// ENV CONNECT
dotenv.config();

const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_DB_CONNECTION).then(() => {
    console.log("Database Connected");
  });
};

module.exports = connectDatabase;
