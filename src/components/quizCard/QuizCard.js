import React from 'react';

const QuizCard = ({title, answers, index}) => {
  const options = answers.map((answer, i) => {
    return <ul key={i}>
              <input id={ answer.title } name={index} className='radio-btn' type='radio' value={answer.title}/>
              <label className='radio-text'>{answer.title}</label>
          </ul>
  });
  return(
    <div>
    <h3>{ title }</h3>
      <form>
        { options }
      </form>
    </div>
  )
}

export default QuizCard;
