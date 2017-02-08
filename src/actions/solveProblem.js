import buildProblem from './buildProblem'

export default function solveProblem() {
	return function(dispatch, getState) {
		dispatch(buildProblem())
	}
}