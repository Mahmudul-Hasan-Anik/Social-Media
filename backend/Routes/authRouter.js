const express = require("express");
const { register } = require("../Controller/userController");

const authRoute = express.Router();

authRoute.post("/register", register);

module.exports = authRoute;
