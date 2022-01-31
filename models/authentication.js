import query from "../db/index.js";

export async function addUser(name, password, email) {
  const data = await query(
    `INSERT INTO users (name, password, email) VALUES ($1, $2, $3) RETURNING name`,
    [name, password, email]
  );
  return data.rows;
}

export async function getUserUsingEmail(email) {
  const data = await query(`SELECT * from users WHERE email = $1`, [email]);
  return data.rows;
}
