const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connectDatabase = require("./Database/Database");

//Database Connection
connectDatabase();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(8000);
