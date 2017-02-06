const defaultState = {
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

export default function probs(state = defaultState, action) {
	switch(action.type) {
		default:
			return state
	}
}