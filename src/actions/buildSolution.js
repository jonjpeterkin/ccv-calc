//builds all the Steps
import { ADD_SOLUTION } from '../constants/actionTypes'
import buildStep from './buildStep'


export default function buildSolution(prob, method) {
	return function (dispatch) {
		dispatch({type: ADD_SOLUTION, payload: {
			sol: {
				name: method,
				steps: {}
			}
		}})
		dispatch(buildStep())
	}
}