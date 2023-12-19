const express = require("express");
const app = express();

app.use("/admin", require("./router"));

app.listen(5000);
