import query from "../db/index.js";

export async function updateScore(userId, topic, score) {
  const data = await query(
    `INSERT INTO scores(user_id, topic, score) 
    VALUES ($1, $2, $3) RETURNING *`,
    [userId, topic, score]
  );
  return data.rows;
}

export async function getScores() {
  const data = await query(`SELECT * from scores;`);
  return data.rows;
}

export async function getScoresByTopic(userId, topic) {
  if (topic === "all") {
    const data = await query(
      `SELECT score,topic,time from scores WHERE user_id = $1;`,
      [userId]
    );
    return data.rows;
  }
  const data = await query(
    `SELECT score from scores WHERE topic = $1 AND user_id = $2;`,
    [topic, userId]
  );
  return data.rows;
}
