import { questions } from "../data/data.js";

const musicQuestions = questions.musicQuestions;
const quizContainer = document.getElementById('quizContainer');

function getQuestionsList() {
  musicQuestions.forEach(question => console.log(question.a));
}

function app() {
  getQuestionsList();
}

app();