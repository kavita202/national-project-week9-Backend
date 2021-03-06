import express from "express";
const router = express.Router();

import {
  getQuestionsByTopic,
  getAllQuestions,
  getAllResources,
  addQuestion,
} from "../models/questions.js";

router.get("/questions", async function (req, res) {
  let topicname = req.query.topic;
  console.log(topicname);
  if (topicname) {
    const data = await getQuestionsByTopic(topicname);
    res.json({
      success: true,
      message: `Found questions by ${topicname}`,
      payload: data,
    });
    return;
  }
  const allquestions = await getAllQuestions();
  res.json({
    success: true,
    message: "here are all the questions",
    payload: allquestions,
  });
});

router.get("/resources", async function (req, res) {
  const resources = await getAllResources();
  res.json({
    success: true,
    message: "here are all the resources",
    payload: resources,
  });
});
router.get("/topics", async function (req, res) {
  const topics = ["frontend", "backend"];
  res.json({
    success: true,
    message: "here are all the topics",
    payload: topics,
  });
});
router.post("/questions", async function (req, res) {
  const response = addQuestion(req.body);
  res.json({
    success: true,
    message: "Your question has been added",
    payload: response,
  });
});

export default router;
