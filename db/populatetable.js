import query from './index.js'
import data from '../data.js'
console.log(data[0].Incorrect_answers)
async function populateQuestionsTable() {
    for (let i = 0; i < data.length; i++) {
        const Topic = data[i].Topic
        const Question = data[i].Question
        const Correct_answer = data[i].Correct_answer
        const Incorrect_answers = data[i].Incorrect_answers

        const res = await query(`INSERT INTO questions (topic, question, correct_answer, incorrect_answers) VALUES ($1, $2, $3, $4) RETURNING *;`,
            [Topic, Question, Correct_answer, Incorrect_answers])
        console.log(res)
    }
};

populateQuestionsTable();