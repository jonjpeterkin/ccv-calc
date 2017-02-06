import { combineReducers } from 'redux'
import probs from './problemsReducer'

const appReducer = combineReducers({
	probs
})

const rootReducer = (state, action) => {
	return appReducer(state, action)
}

export default rootReducer