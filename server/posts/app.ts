import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import routes from "./router";
dotenv.config();
import { Request, Response } from "express";
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/", routes);

// event bus reciever

app.post("/events", (req:Request, res:Response) => {

  console.log("Event Recieved!", req.body.type);

  res.send({});
});

app.listen(PORT, () => {
  console.log(`Post server is running on PORT: ${PORT}`);
});
