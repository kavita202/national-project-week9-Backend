import express from "express";
const router = express.Router();
import { getQuestionsByTopic, getAllQuestions } from "../models/questions.js";

/* GET users listing. */
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
  const allquestions = await getAllQuestions()
  res.json({
    success: true,
    message: 'here are all the questions',
    payload: allquestions
  })
});

export default router;
