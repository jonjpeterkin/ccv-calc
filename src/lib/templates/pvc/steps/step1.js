import decompBase from '../elements/decompBase'
import placeNames from '../elements/placeNames'

const bp = (prob, ctx) => {
	decompBase(ctx)
	ctx.font = '24px Roboto'
	// Badly needs to be refactored
	Object.values(prob.ints).forEach((int, i) => {
		ctx.fillText(int.val, 20 + (330 * i), 60)
		Object.values(int.digits).reverse().forEach((digit, j) => {
			ctx.fillText(digit.val * digit.place, 20 + (330 * i) + (11 * j), 100 + (30 * j))
			ctx.fillText(`${digit.val} ${placeNames[digit.place]}`, 100 + (330 * i), 100 + (30 * j))
		})
	})
}

const step1 = {
	desc: "Decompose the problem.",
	num: 1,
	bp: bp,
	canvasDims: {height: 200, width: 550}
}

export default step1