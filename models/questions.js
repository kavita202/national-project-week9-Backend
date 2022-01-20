import query from "../db/index.js";

export async function getQuestionsByTopic(topicname) {
  const data = await query(
    `SELECT * FROM questions WHERE topic = $1 ORDER BY RANDOM() LIMIT 6`,
    [topicname]
  );
  return data.rows;
}

export async function getAllQuestions() {
  const data = await query(`SELECT * FROM questions;`);
  return data.rows;
}

export async function getAllResources() {
  const resources = await query(`SELECT * FROM resources`);
  return resources.rows;
}
