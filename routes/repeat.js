import express from "express";
const router3 = express.Router();

import {
  getAllRepeatData,
  addRepeatScore,
  updateRepeatScore,
  getRepeatDataForUser,
} from "../models/repeat.js";

router3.get("/", async (req, res) => {
  const response = await getAllRepeatData();
  res.json({ payload: response });
});

router3.post("/", async (req, res) => {
  const { userId } = req.body;
  console.log(req.body);
  const response = await getRepeatDataForUser(userId);
  console.log(req.body);
  res.json({ payload: response });
});

// if the payload is empty we add new data to the table
router3.put("/", async (req, res) => {
  const { front, interval, repetition, efactor, dueDate, userId } = req.body;
  console.log(req.body);
  const data = await addRepeatScore(
    front,
    interval,
    repetition,
    efactor,
    dueDate,
    userId
  );
  res.json({ payload: data });
});

// if the payload is not empty, use it to recalculate specific data and send an update
router3.patch("/", async (req, res) => {
  const { front, interval, repetition, efactor, dueDate, userId } = req.body;
  console.log(req.body);
  const data = await updateRepeatScore(
    front,
    interval,
    repetition,
    efactor,
    dueDate,
    userId
  );
  res.json({ payload: data });
});

export default router3;
