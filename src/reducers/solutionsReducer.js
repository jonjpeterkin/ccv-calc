import { ADD_SOLUTION, ADD_STEP } from '../constants/actionTypes'

export default function prob(state = null, action) {
	switch(action.type) {
		case ADD_SOLUTION:
			return {...state, [action.payload.sol.name]: action.payload.sol}
		case ADD_STEP:
			return {...state,
				[action.payload.solName]: {
					steps: {
						[action.payload.step.num]: action.payload.step
					}
				}
			}
		default:
			return state
	}
}
