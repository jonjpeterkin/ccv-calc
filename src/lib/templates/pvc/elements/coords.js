
export const xToken = (place, i) => {
	//		  places into correct column		                provides wrap and individual spacing
	return 465 - (140 * (Math.log10(place) + 1)) + ((i % 3) * 28)
}

export const yToken = (pos, i) => {
	//      places into correct big row   provides step pattern and individual row spacing
	return (90 * pos)       +        (28 * Math.floor((i / 3)))
}

export const lasso = (prob, place) => {
	// error prone: relying on digit[n]; the array is derived from an unordered object
	var digits = Object.values(prob.ints).map((int) => {
		return int.digits.find((digit) => digit.place === place)
	})
	var sum = digits[0].val + digits[1].val
	var rem = sum - 10
	if(sum < 10){ return }
	var xTopL = 465 - (140 * (Math.log10(place) + 1)) + ((rem % 3) * 28) - 14
	var xTopR = 465 - (140 * (Math.log10(place) + 1)) + 84               - 14
	var xLeft = 465 - (140 * (Math.log10(place) + 1))                    - 14
	var yTop = 90 + (28 * Math.floor((rem / 3)))                         - 14
	var yMid = 90 + (28 * Math.ceil((rem / 3)))                          - 14
	var yBot = 180 + (28 * Math.floor(((digits[1].val - 1) / 3)))        + 14
	return {xTopL, xTopR, xLeft, yTop, yMid, yBot}
}
