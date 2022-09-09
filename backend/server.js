const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

const connectDatabase = require("./Database/Database");

//Database Connection
connectDatabase();

// ENV CONNECT
dotenv.config();

app.get("/", function (req, res) {
  res.send("Hello World");
});

const port = process.env.PORT ? process.env.PORT : 5000;

app.listen(port, () => {
  console.log(`app running on port : ${port}`);
});
