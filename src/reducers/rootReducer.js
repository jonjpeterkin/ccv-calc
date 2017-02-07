import { combineReducers } from 'redux'
import RESET from '../constants/actionTypes'
import prob from './problemReducer'

const appReducer = combineReducers({
	prob
})

const rootReducer = (state, action) => {
	if(action.type === RESET){
		state = undefined
	}

	return appReducer(state, action)
}

export default rootReducer