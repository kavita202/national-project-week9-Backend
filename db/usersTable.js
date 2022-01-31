import query from "./index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS users
(id SERIAL PRIMARY KEY,
name TEXT,
password CHAR(60),
email varchar(319)
)`;

async function createUsersTable() {
  const res = await query(sqlString);
  console.log("Users table created:", res);
}

createUsersTable();
