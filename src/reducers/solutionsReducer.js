import { ADD_SOLUTION, ADD_STEP } from '../constants/actionTypes'

export default function prob(state = null, action) {
	const pl = action.payload
	switch(action.type) {
		case ADD_SOLUTION:
			return {...state, [pl.sol.name]: pl.sol}
		case ADD_STEP:
			return {...state,
				[pl.solName]: {
					...state[pl.solName],
					steps: {
						...state[pl.solName].steps,
						[pl.step.num]: pl.step
					}
				}
			}
		default:
			return state
	}
}
