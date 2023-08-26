import express from 'express';
import posts from './post';
const app = express();

app.use("/post", posts);

export default app;

