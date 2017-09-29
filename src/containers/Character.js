import { connect } from 'react-redux'
import { getCharacters } from '../actions/Character'
import CharacterList from '../components/characterlist/CharacterList'

const mapStateToProps = state => {
  return {
    characters: state.characters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderCharacters: () => {
      dispatch(getCharacters())
    }
  }
}

const Characters = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList)

export default Characters