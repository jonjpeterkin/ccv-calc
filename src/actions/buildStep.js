import { ADD_STEP } from '../constants/actionTypes'
import * as pvc from '../lib/templates/pvc'

export default function buildStep() {
	return function (dispatch) {
		var step = {
			desc: "FOO",
			num: "one",
			bp: {
				base: pvc.base
			}
		}
		dispatch({type: ADD_STEP, payload: {step, solName: "pvc"}})
	}
}

/*

bp: {
	desc: "",
	num: n,
	draw: {
		base: function
	}
}

*/