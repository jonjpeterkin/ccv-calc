import { SUBMIT_PROBLEM } from '../constants/actionTypes'
import solveProblem from './solveProblem'

export default function submitProblem(formData) {
	return function(dispatch) {

		dispatch({type: SUBMIT_PROBLEM, payload: {
			raw: formData.prob
		}})
		dispatch(solveProblem())
	}
}