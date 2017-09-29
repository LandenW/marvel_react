import { combineReducers } from 'redux'
import characters from './Characters'
import question from './Jeopardy'

const marvelApp = combineReducers({
    characters,
    question
})

export default marvelApp