const express = require("express");
const calculationscontroller = require("../controller/calculationscontroller");

const Router = express.Router();

Router.get("/", (req, res) => {
  res.send("Hello Hng stage 3 task is running!");
});

Router.post("/calc", calculationscontroller);

module.exports = Router;
