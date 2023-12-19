const express = require("express");
const checkAuth = require("./checkAuth");
const app = express();

app.use(checkAuth);

app.get("/admin", checkAuth, (req, res) => {
  res.send("Authenticated");
});

app.listen(5000);
