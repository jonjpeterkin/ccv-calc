import { combineReducers } from 'redux'
import RESET from '../constants/actionTypes'
import prob from './problemReducer'
import sols from './solutionsReducer'

const appReducer = combineReducers({
	prob, sols
})

const rootReducer = (state, action) => {
	if(action.type === 'RESET') {
		state = undefined
	}

	return appReducer(state, action)
}

export default rootReducer