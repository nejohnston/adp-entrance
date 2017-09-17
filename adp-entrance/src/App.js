import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import json from 'body-parser';
import data from './quiz.json';

var jsonData = require("./quiz.json");
console.log(jsonData)

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      title1: [],
      title2: [],
      questions: [],
      answers: []
    }
  }

  componentDidMount(){
  var jsonData = require("./quiz.json");
  console.log(jsonData.quizzes[1].title)
  // var quizTitles = jsonData.push()
    this.setState({
      title1: jsonData.quizzes[0].title,
      title2: jsonData.quizzes[1].title
    })
  // .catch(err => console.log(err))
}

  render() {
    return (
      <div className="App">
        <button>{this.state.title1}</button>
        <button>{this.state.title2}</button>
</div>
    );
  }
}

export default App;
