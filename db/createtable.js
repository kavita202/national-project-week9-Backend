import query from "./index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS questionData 
(id SERIAL PRIMARY KEY,
topic TEXT,
question TEXT,
correct_answer TEXT,
incorrect_answers TEXT[],
type TEXT
);`;

async function createQuestionsTable() {
  const res = await query(sqlString);
  console.log("Questions table created:", res);
}

createQuestionsTable();
