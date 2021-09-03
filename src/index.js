import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const questionList = [];

function createQuestion(questionList, question, type, options) {
  const questionObj = {
    question: question,
    type: type,
    answer: undefined,
  };
  switch (type) {
    case "radio":
    case "scale":
      questionObj.options = options;
      break;
    default:
      break;
  }

  questionList.push(questionObj);
}

createQuestion(
  questionList,
  "On a scale from 1-5, how would you rate us?",
  "scale",
  { min: 1, max: 5, num: 5 }
);
createQuestion(
  questionList,
  "How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
  "text"
);
createQuestion(questionList, "Which bear is best?", "radio", {
  options: ["brown", "black", "grizzly", "polar"],
});
createQuestion(questionList, "How old are you?", "text");

ReactDOM.render(
  <React.StrictMode>
    <App questions={questionList} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
