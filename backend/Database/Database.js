const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://Ecommerce:authentication@cluster0.ncuib.mongodb.net/social_media?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Database Connected");
    });
};

module.exports = connectDatabase;
