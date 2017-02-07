import setProblemInfo from './setProblemInfo'

export default function solveProblem() {
	return function(dispatch, getState) {
		dispatch(setProblemInfo())
	}
}