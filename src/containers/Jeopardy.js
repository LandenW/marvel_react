import { connect } from 'react-redux'
import { getQuestion } from '../actions/Jeopardy'
import JeopardyDisplay from '../components/jeopardydisplay/JeopardyDisplay'

const mapStateToProps = state => {
  return {
    question: state.question
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderQuestion: () => {
      dispatch(getQuestion())
    }
  }
}

const Questions = connect(
  mapStateToProps,
  mapDispatchToProps
)(JeopardyDisplay)

export default Questions