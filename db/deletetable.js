import query from "./index.js";

const sqlString = `DROP TABLE repeatData;`;

async function deleteRepeat() {
  const res = await query(sqlString);
  console.log("repeatData table emptied:", res);
}

deleteRepeat();
