import query from "./index.js";
import data from "../data.js";

async function populateQuestionsTable() {
  for (let i = 0; i < data.length; i++) {
    const Topic = data[i].Topic;
    const Question = data[i].Question;
    const Correct_answer = data[i].Correct_answer;
    const Incorrect_answers = data[i].Incorrect_answers;
    const Type = data[i].Type;

    const res = await query(
      `INSERT INTO questionData (topic, question, correct_answer, incorrect_answers, type) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [Topic, Question, Correct_answer, Incorrect_answers, Type]
    );
    console.log(res);
  }
}

populateQuestionsTable();
