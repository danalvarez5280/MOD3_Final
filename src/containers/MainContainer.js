import { getQuizes, addUser } from '../actions';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import Users from '../components/Users/Users'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    quizList: state.quizGen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuizes: (url) => dispatch(getQuizes(url)),
    addUser: (url) => dispatch(addUser(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
