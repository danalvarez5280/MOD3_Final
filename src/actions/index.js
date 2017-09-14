export const addUser = () => {
  return {
    type: 'ADD_USER'
  }
}

export const fetchQuiz = (quizes) => {
  return {
    type: 'QUIZ_FETCH',
    quizes
  }
}

export const getQuizes = (url) => {
  return dispatch => {
    fetch(url, {
      method: 'GET',

    })
    .then(data => data.json())
    .then(obj => obj.quizzes[0])
    .then(object => dispatch(fetchQuiz(object)))
  }
}
