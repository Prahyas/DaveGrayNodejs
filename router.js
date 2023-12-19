const express = require("express");
const checkAuth = require("./checkAuth");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

router.get("/admin", checkAuth, (req, res) => {
  res.send("Authenticated");
});

module.exports = router;
