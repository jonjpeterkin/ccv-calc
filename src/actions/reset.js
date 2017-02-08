export default function reset() {
	return function(dispatch) {
		dispatch({type: 'RESET'})
	}
}