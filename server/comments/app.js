const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const router = require("./router");
dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
