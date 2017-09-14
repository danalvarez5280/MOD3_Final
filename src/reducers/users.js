const initialState = [
  {id: 1, name: 'User-1'}
];

export const users = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, {id: state.length++, name: `User-${state.length++}`}]
    default:
      return state;
  }
};

export const quizGen = (state = [], action) => {
  switch(action.type) {
    case 'QUIZ_FETCH':
      return action.quizes;

    default:
      return state;
  }
};
