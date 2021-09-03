import "./App.css";
import Question from "./components/question";
import React, { Component } from "react";

class App extends Component {
  state = {
    questionNumber: 2,
    questionList: this.props.questions,
  };

  handleUserInput = (e) => {
    const value = e.target.value;
    let questionList = [...this.state.questionList];
    let questionNumber = this.state.questionNumber;
    questionList[questionNumber] = { ...questionList[questionNumber] };
    questionList[questionNumber].answer = value;
    this.setState({ questionList });
  };

  handleProgression = (e) => {
    const direction = e.target.value;
    const questionNumber = this.state.questionNumber;
    if (direction === "next") {
      this.setState({ questionNumber: questionNumber + 1 });
    } else {
      this.setState({ questionNumber: questionNumber - 1 });
    }
  };

  render() {
    return (
      <div className="background">
        <Question
          handleUserInput={this.handleUserInput}
          questionNumber={this.state.questionNumber}
          questionData={this.state.questionList}
          handleProgression={this.handleProgression}
        />
      </div>
    );
  }
}

export default App;
