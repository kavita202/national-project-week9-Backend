import express from "express";
const router2 = express.Router();

import {
  updateScore,
  getScores,
  getScoresByTopic,
  getRepeatData,
} from "../models/users.js";

// this route adds the score but also returns in the payload the repeat data
router2.post("/new", async (req, res) => {
  const { userId, topic, score } = req.body;
  const data = await updateScore(userId, topic, score);
  const response = await getRepeatData(userId, topic);
  res.json({
    success: true,
    message: "score successfully added",
    payload: response,
  });
});

router2.get("/", async (req, res) => {
  const data = await getScores();
  res.json({ payload: data });
});

router2.post("/", async (req, res) => {
  const { userId, topic } = req.body;
  const data = await getScoresByTopic(userId, topic);
  res.json({ payload: data });
});

export default router2;
