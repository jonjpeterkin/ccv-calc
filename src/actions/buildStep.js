import { ADD_STEP } from '../constants/actionTypes'
// import * as pvc from '../lib/templates/pvc/pvc'
import stepList from '../lib/templates/stepList'

export default function buildStep(prob, method, num) {
	return function (dispatch) {
		var curriedBp = stepList[method][num].bp.bind(null, prob)
		var step = {...stepList[method][num], bp: curriedBp}
		dispatch({type: ADD_STEP, payload: {step, solName: method}})
	}
}