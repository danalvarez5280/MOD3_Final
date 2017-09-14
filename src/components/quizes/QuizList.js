import React, { Component } from 'react';
import QuizCard from '../quizCard/QuizCard';
import MainContainer from '../../containers/MainContainer';
import './QuizList.css';
class QuizList extends Component {

  componentDidMount() {
    this.props.fetchQuizes('http://localhost:3000/quizzes')
  }


  render() {
    const {quizList} = this.props;
    const questions = quizList.questions || [];
    const singleQs = questions.map((q, i) => {
      return <QuizCard key={i} {...q} index={i}/>
    })
    return (
      <section className="quiz-list">
        <h1>{ quizList.title }</h1>
          { singleQs }
          <button>Submit</button>
      </section>
    )
  }
}

export default MainContainer(QuizList);
