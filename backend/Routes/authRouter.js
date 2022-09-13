const express = require("express");
const {
  register,
  userActivation,
  login,
} = require("../Controller/userController");

const authRoute = express.Router();

authRoute.post("/register", register);
authRoute.post("/activate", userActivation);
authRoute.post("/login", login);

module.exports = authRoute;
