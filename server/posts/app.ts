import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import routes from "./router";
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Post server is running on PORT: ${PORT}`);
});
