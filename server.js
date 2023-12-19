const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  let serverData = "";
  fs.readFile("./data.txt", "utf8", (err, data) => {
    if (err) throw err;
    serverData = data;
    res.send(serverData);
  });
});

app.listen(5000, () => {
  console.log("Server started");
});
