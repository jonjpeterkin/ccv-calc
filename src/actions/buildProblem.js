import { SET_OPERATION } from '../constants/actionTypes'
import { SET_INTEGERS } from '../constants/actionTypes'
import { SET_ANSWER } from '../constants/actionTypes'

function determineOper(prob) {
	const oper = /[+-]/.exec(prob)
	return oper ? oper[0] : "INVALID"
}

function determineAnswer(probState) {
	const answer = eval(`${probState.ints[0].val} ${probState.oper} ${probState.ints[1].val}`)
	console.log("answer: ", answer)
	return answer
}

function buildDigits(val) {
	return val.split("").map((digit, idx) => {
		return {
			val: parseInt(digit, 10), place: 10 ** idx
		}
	})
}

function buildInts(prob) {
	const vals = prob.match(/\d+/g)
	if(prob.includes('.') || vals.length !== 2) {
		return "INVALID"
	}
	return vals.map((val, idx) => {
		return {
			val: parseInt(val, 10), pos: idx += 1, digits: buildDigits(val)
		}
	})
}

export default function buildProblem() {
	return function(dispatch, getState) {
		const oper = determineOper(getState().prob.raw)
		const ints = buildInts(getState().prob.raw)
		dispatch({type: SET_OPERATION, payload: {oper}})
		dispatch({type: SET_INTEGERS, payload: {ints}})
		const answer = determineAnswer(getState().prob)
		dispatch({type: SET_ANSWER, payload: {answer}})
	}
}