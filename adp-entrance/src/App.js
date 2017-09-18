import React, { Component } from 'react';
import './App.css';

import abstractQuestions from './abstractQuiz/components/questions';
import abstractAnswers from './abstractQuiz/components/answers';
import devQuestions from './devQuiz/components/questions';
import devAnswers from './devQuiz/components/answers';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: [],
      abstractQuestions: [],
      abstractAnswers: [],
      devQuestions: [],
      devAnswers: []
    }
  }

  componentDidMount(){
  var jsonData = require("./quiz.json");
  console.log(jsonData.quizzes[1].title)
  let abstractTitle = [jsonData.quizzes[0].title];
  let devTitle = [jsonData.quizzes[1].title];
  let quizTitles = [abstractTitle, devTitle];
  // var quizTitles = jsonData.push()
    this.setState({
      title: quizTitles
    })
  // .catch(err => console.log(err))
}

  render() {
    return (
      <div className="App">
        <button >{this.state.title[0]}</button>
        <button>{this.state.title[1]}</button>
</div>
    );
  }
}

export default App;
