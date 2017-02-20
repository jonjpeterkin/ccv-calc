import token from '../elements/token'
import chartBase from '../elements/chartBase'
import { xToken, yToken, lasso } from '../elements/coords'

const compTen = (prob, place, ctx) => {
	var l = lasso(prob, place)
	ctx.moveTo(l.xTopL, l.yTop)
	ctx.lineTo(l.xTopR, l.yTop)
	ctx.lineTo(l.xTopR, l.yBot)
	ctx.lineTo(l.xLeft, l.yBot)
	ctx.lineTo(l.xLeft, l.yMid)
	ctx.lineTo(l.xTopL, l.yMid)
	ctx.closePath()
	ctx.moveTo(l.xLeft + 50, l.yBot)
	ctx.bezierCurveTo(l.xLeft + 20, l.yBot + 50, l.xLeft - 10, l.yBot + 50,  l.xLeft - 40, l.yBot)
	ctx.stroke()
}

const bp = (prob, ctx) => {
	chartBase(ctx)
	for(var int of prob.ints) {
		for(var digit of int.digits) {
			for(var i = 0; i < digit.val; i++) {
				token(ctx, xToken(int, digit, i), yToken(int, digit, i)	)
			}
		}
	}
	compTen(prob, 1, ctx)
}

const step3 = {
	desc: "Compose a 10.",
	num: 3,
	bp: bp,
	canvasDims: {height: 300, width: 420}
}

export default step3
