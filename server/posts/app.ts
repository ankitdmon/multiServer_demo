import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});