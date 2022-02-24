import query from "./index.js";

const sqlString = `TRUNCATE TABLE questionData;`;

async function deletequestions() {
  const res = await query(sqlString);
  console.log("scores table emptied:", res);
}

deletequestions();
