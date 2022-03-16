import query from "../db/index.js";

export async function getAllRepeatData() {
  const data = await query(`SELECT * from repeatData;`);
  return data.rows;
}

export async function getRepeatDataForUser(userId) {
  const data = await query(
    `SELECT (front, due_date) from repeatData WHERE user_id = $1;`,
    [userId]
  );
  return data.rows;
}

export async function addRepeatScore(
  front,
  interval,
  repetition,
  efactor,
  dueDate,
  userId
) {
  const data = await query(
    `INSERT INTO repeatData(front, interval, repetition, efactor, due_date, user_id) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [front, interval, repetition, efactor, dueDate, userId]
  );

  return data.rows;
}

export async function updateRepeatScore(
  front,
  interval,
  repetition,
  efactor,
  dueDate,
  userId
) {
  const data = await query(
    `UPDATE repeatData SET (interval, repetition, efactor, due_date) = ($2, $3, $4, $5) 
      WHERE user_id = $1 AND front = $6 RETURNING *`,
    [userId, interval, repetition, efactor, dueDate, front]
  );
  return data.rows;
}
