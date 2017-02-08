import { ADD_STEP } from '../constants/actionTypes'
// import * as pvc from '../lib/templates/pvc/pvc'
import { stepList } from '../lib/templates/pvc/stepList'

export default function buildStep(prob) {
	return function (dispatch) {
		var curriedBp = stepList[1].bp.bind(null, prob)
		var step = {...stepList[1], bp: curriedBp}
		dispatch({type: ADD_STEP, payload: {step, solName: "pvc"}})
	}
}