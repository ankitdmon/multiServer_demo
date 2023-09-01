import express from "express";
import * as eventCon from "../controller/eventController";

const router = express.Router();

router.post("/", eventCon.brokerEvent);

export default router;