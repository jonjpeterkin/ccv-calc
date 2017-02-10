//builds all the Steps
import { ADD_SOLUTION } from '../constants/actionTypes'
import stepList from '../lib/templates/stepList'
import buildStep from './buildStep'


export default function buildSolution(prob, method) {
	return function (dispatch) {
		dispatch({type: ADD_SOLUTION, payload: {
			sol: {
				name: method,
				steps: {}
			}
		}})
		const myStepList = stepList

		for(var stepNum in myStepList[method]) {
			dispatch(buildStep(prob, method, stepNum))
		}
	}
}