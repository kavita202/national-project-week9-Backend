import query from "./index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS resources
(id SERIAL PRIMARY KEY,
topic TEXT,
title TEXT,
url TEXT
);`;

async function createResourcesTable() {
  const res = await query(sqlString);
  console.log("Resources table created:", res);
}

createResourcesTable();
