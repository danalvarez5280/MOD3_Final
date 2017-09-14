import React, { Component } from 'react';
import './App.css';
// import Users from '../../containers/Users'
import QuizList from '../quizes/QuizList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome To Quizzer</h1>
        <QuizList />
      </div>
    );
  }
}

export default App;
