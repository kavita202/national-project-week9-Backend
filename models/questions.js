import query from "../db/index.js";

export async function getQuestionsByTopic(topicname) {
  const data = await query(
    `SELECT * FROM questionData WHERE topic = $1 ORDER BY RANDOM() LIMIT 6`,
    [topicname]
  );
  return data.rows;
}

export async function getAllQuestions() {
  const data = await query(`SELECT * FROM questionData;`);
  return data.rows;
}

export async function getAllResources() {
  const resources = await query(`SELECT * FROM resources`);
  return resources.rows;
}

export async function addQuestion({
  Topic,
  Question,
  Correct_answer,
  Incorrect_answers,
  Type,
}) {
  const question = await query(
    `INSERT INTO questionData(topic, question, correct_answer, incorrect_answers, type) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
    [Topic, Question, Correct_answer, Incorrect_answers, Type]
  );
  return question.rows;
}
