import query from "./index.js";
import resourceData from "../resourcesData.js";

async function populateResourcesTable() {
  for (let i = 0; i < resourceData.length; i++) {
    const topic = resourceData[i].topic;
    const title = resourceData[i].title;
    const url = resourceData[i].url;

    const res = await query(
      `INSERT INTO resources (topic, title, url) VALUES ($1, $2, $3) RETURNING *;`,
      [topic, title, url]
    );
    console.log(res);
  }
}

populateResourcesTable();
