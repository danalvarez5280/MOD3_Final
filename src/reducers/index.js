import { combineReducers } from 'redux';
import { users, quizGen } from './users'

const reducers = combineReducers({
  users,
  quizGen
})

export default reducers;
