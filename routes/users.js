import express from "express";
const router2 = express.Router();

import { updateScore, getScores, getScoresByTopic } from "../models/users.js";

router2.put("/", async (req, res) => {
  const { userId, topic, score } = req.body;
  const data = await updateScore(userId, topic, score);
  res.json({
    success: true,
    message: "score successfully added",
    payload: data,
  });
});

router2.get("/", async (req, res) => {
  const data = await getScores();
  res.json({ payload: data });
});

router2.post("/", async (req, res) => {
  const { userId, topic } = req.body;
  console.log(req.body);
  const data = await getScoresByTopic(userId, topic);
  res.json({ payload: data });
});

export default router2;
