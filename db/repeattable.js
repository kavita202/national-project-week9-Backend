import query from "./index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS repeatData 
(id SERIAL PRIMARY KEY,
front TEXT,
interval INT,
repetition INT,
efactor DECIMAL,
due_date TIMESTAMP,
user_id VARCHAR
);`;

async function createRepeatTable() {
  const res = await query(sqlString);
  console.log("Repeat table created:", res);
}

createRepeatTable();
