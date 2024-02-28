// Imports
const express = require("express");
const cors = require("cors");
const path = require("path");

// Apps
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) =>
  res.send("Welcome to the Overwatch breakpoint API!")
);

module.exports = app;
