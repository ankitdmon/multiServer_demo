import express from 'express';
import posts from './post';
const app = express();

app.use("/posts", posts);

export default app;

