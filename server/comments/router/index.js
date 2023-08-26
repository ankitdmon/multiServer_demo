const express = require("express");
const comment = require("./comment");
const app = express();

app.use("/comment", comment);

module.exports = app;