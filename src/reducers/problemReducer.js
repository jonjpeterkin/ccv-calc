import { SUBMIT_PROBLEM } from '../constants/actionTypes'
import { SET_OPERATION } from '../constants/actionTypes'
import { SET_INTEGERS } from '../constants/actionTypes'
import { SET_ANSWER } from '../constants/actionTypes'

const defaultState = {
	raw: null,
	oper: null,
	answer: null,
	ints: {
		val: null,
		digits: {
			val: null,
			place: null
		}
	}
}

export default function prob(state = defaultState, action) {
	switch(action.type) {
		case SUBMIT_PROBLEM:
			return {...state, raw: action.payload.raw}
		case SET_OPERATION:
			return {...state, oper: action.payload.oper}
		case SET_INTEGERS:
			return {...state, ints: action.payload.ints}
		case SET_ANSWER:
			return {...state, answer: action.payload.answer}
		default:
			return state
	}
}