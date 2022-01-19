import query from './index.js'

const sqlString = `CREATE TABLE IF NOT EXISTS resources
(id SERIAL PRIMARY KEY,
topic TEXT,
resources TEXT[]
);`

async function createQuestionsTable() {
    const res = await query(sqlString)
    console.log('Resources table created:', res)
}

createQuestionsTable()