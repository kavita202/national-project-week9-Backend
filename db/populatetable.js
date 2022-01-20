import query from "./index.js";
import data2 from "../data2.js";
console.log(data2[0].Incorrect_answers);
async function populateQuestionsTable() {
  for (let i = 0; i < data2.length; i++) {
    const Topic = data2[i].Topic;
    const Question = data2[i].Question;
    const Correct_answer = data2[i].Correct_answer;
    const Incorrect_answers = data2[i].Incorrect_answers;

    const res = await query(
      `INSERT INTO questions (topic, question, correct_answer, incorrect_answers) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [Topic, Question, Correct_answer, Incorrect_answers]
    );
    console.log(res);
  }
}

populateQuestionsTable();
