import token from '../elements/token'
import chartBase from '../elements/chartBase'
import { xToken, yToken } from '../elements/coords'

const bp = (prob, ctx) => {
	chartBase(ctx)
	for(var int of prob.ints) {
		for(var digit of int.digits) {
			for(var i = 0; i < digit.val; i++) {
				token(ctx, xToken(int, digit, i), yToken(int, digit, i))
			}
		}
	}
}

const step2 = {
	desc: "Draw and fill out a place value chart.",
	num: 2,
	bp: bp,
	canvasDims: {height: 300, width: 420}
}

export default step2
