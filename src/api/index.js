import express from "express";

import calendarRoute from "./calendar";

const router = express.Router();

// Use Routes
router.use(calendarRoute);

export default router;
