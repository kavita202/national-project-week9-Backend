import query from "./index.js";

const sqlString = `TRUNCATE TABLE scores;`;

async function deleteScores() {
  const res = await query(sqlString);
  console.log("scores table emptied:", res);
}

deleteScores();
