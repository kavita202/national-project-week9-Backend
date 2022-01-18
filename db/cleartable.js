import query from './index.js'

const sqlString = `TRUNCATE TABLE questions;
;`

async function deleteQuestions() {
    const res = await query(sqlString)
    console.log('Questions table emptied:', res)
}

deleteQuestions()