const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDatabase = require("./Database/Database");
const { readdirSync } = require("fs");
const cors = require("cors");

//Database Connection
connectDatabase();

// ENV CONNECT
dotenv.config();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
readdirSync("./Routes").map((file) =>
  app.use("/", require(`./Routes/${file}`))
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app running on port : ${port}`);
});
