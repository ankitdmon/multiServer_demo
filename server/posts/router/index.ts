import express from 'express';
import posts from './post';
import events from "./event";
const app = express();

app.use("/post", posts);
// app.use("/events", events);

export default app;

