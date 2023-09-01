const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const router = require("./router");
dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);

// event bus reciever

app.post("/events", (req, res) => {
  console.log("Event Recieved!", req.body.type);
  req.setEncoding({});
});

app.listen(PORT, () => {
  console.log(`Comment server is running on PORT:${PORT}`);
});
