import express from "express";
import * as calendar from "./controller";

const router = express.Router();

router.post("/calendar/insert", calendar.insertEvent);
router.get("/calendar", calendar.getEvents);

export default router;
