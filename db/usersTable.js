import query from "./index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS scores
(id SERIAL PRIMARY KEY,
user_id VARCHAR,
topic TEXT,
time TIMESTAMP NOT NULL
DEFAULT CURRENT_TIMESTAMP,
score SMALLINT
);`;

async function createscoreTable() {
  const res = await query(sqlString);
  console.log("Scores table created:", res);
}

createscoreTable();
