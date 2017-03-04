import token from '../elements/token'
import chartBase from '../elements/chartBase'
import { xToken, yToken, lasso } from '../elements/coords'

const arrow = (prob, place, ctx) => {
	var l = lasso(prob, place)
	ctx.moveTo(l.xLeft + 50, l.yBot)
	var destd = prob.ints[1].digits.find((digit) => digit.place === place * 10)
	var xdest = xToken(destd.place, destd.val)
	var ydest = yToken(2, destd.val)
	ctx.bezierCurveTo(l.xLeft + 20, l.yBot + 50, l.xLeft - 10, l.yBot + 50,  xdest + 10, ydest + 10)
	token(ctx, xdest, ydest, 'green')
	ctx.stroke()
}

const compTen = (prob, place, ctx) => {
	var l = lasso(prob, place)
	ctx.strokeStyle = 'green'
	ctx.moveTo(l.xTopL, l.yTop)
	ctx.lineTo(l.xTopR, l.yTop)
	ctx.lineTo(l.xTopR, l.yBot)
	ctx.lineTo(l.xLeft, l.yBot)
	ctx.lineTo(l.xLeft, l.yMid)
	ctx.lineTo(l.xTopL, l.yMid)
	ctx.closePath()
	arrow(prob, place, ctx)
	ctx.stroke()
}


const bp = (prob, ctx) => {
	chartBase(ctx)
	for(var int of prob.ints) {
		for(var digit of int.digits) {
			for(var i = 0; i < digit.val; i++) {
				token(ctx, xToken(digit.place, i), yToken(int.pos, i))
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
