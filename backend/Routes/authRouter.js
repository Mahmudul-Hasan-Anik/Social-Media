const express = require("express");

const authRoute = express.Router();

authRoute.get("/auth", (req, res) => {
  res.send("Hello Developer");
});

module.exports = authRoute;
