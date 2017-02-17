import { numRep, chartBase, decompBase } from './pvc'

const placeNames = {1: 'ones', 10: 'tens', 100: 'hundreds'}

function tokenCoords(int, digit, i) {
	//		  places into correct column		                provides wrap and individual spacing
	var x = 465 - (140 * (Math.log10(digit.place) + 1)) + ((i % 3) * 28)
	//      places into correct big row   provides step pattern and individual row spacing
	var y = (90 * int.pos)       +        (28 * Math.floor((i / 3)))
	return {x, y}
}

const compTen = (prob, place, ctx) => {
	var digits = Object.values(prob.ints).map((int) => {
		return int.digits.find((digit) => digit.place === place)
	})
	var sum = digits[0].val + digits[1].val
	var rem = sum - 10
	var xTopL = 465 - (140 * (Math.log10(place) + 1)) + ((rem % 3) * 28) - 14
	var xTopR = 465 - (140 * (Math.log10(place) + 1)) + 84               - 14
	var xLeft = 465 - (140 * (Math.log10(place) + 1))                    - 14
	var yTop = 90 + (28 * Math.floor((rem / 3)))                         - 14
	var yMid = 90 + (28 * Math.ceil((rem / 3)))                          - 14
	var yBot = 180 + (28 * Math.floor(((digits[1].val - 1) / 3)))        + 14
	ctx.moveTo(xTopL, yTop)
	ctx.lineTo(xTopR, yTop)
	ctx.lineTo(xTopR, yBot)
	ctx.lineTo(xLeft, yBot)
	ctx.lineTo(xLeft, yMid)
	ctx.lineTo(xTopL, yMid)
	ctx.closePath()
	ctx.stroke()
	// error prone: relying on digit[n]; the array is derived from an unordered object
}

const step1BP = (prob, ctx) => {
	decompBase(ctx)
	ctx.font = '24px Roboto'
	Object.values(prob.ints).forEach((int, i) => {
		ctx.fillText(int.val, 20 + (330 * i), 60)
		Object.values(int.digits).reverse().forEach((digit, j) => {
			ctx.fillText(digit.val * digit.place, 20 + (330 * i) + (11 * j), 100 + (30 * j))
			ctx.fillText(`${digit.val} ${placeNames[digit.place]}`, 100 + (330 * i), 100 + (30 * j))
		})
	})
}

const step2BP = (prob, ctx) => {
	chartBase(ctx)
	for(var int of prob.ints) {
		for(var digit of int.digits) {
			for(var i = 0; i < digit.val; i++) {
				numRep(ctx, tokenCoords(int, digit, i).x, tokenCoords(int, digit, i).y)
			}
		}
	}
}

const step3BP = (prob, ctx) => {
	chartBase(ctx)
	for(var int of prob.ints) {
		for(var digit of int.digits) {
			for(var i = 0; i < digit.val; i++) {
				numRep(ctx, tokenCoords(int, digit, i).x, tokenCoords(int, digit, i).y)
			}
		}
	}
	compTen(prob, 1, ctx)
}


export const pvcStepList = {
	1: {
		desc: "Decompose the problem.",
		num: 1,
		bp: step1BP,
		canvasDims: {height: 200, width: 550}
	},
	2: {
		desc: "Draw and fill out a place value chart.",
		num: 2,
		bp: step2BP,
		canvasDims: {height: 300, width: 420}
	},
	3: {
		desc: "Compose a 10.",
		num: 3,
		bp: step3BP,
		canvasDims: {height: 300, width: 420}
	}
}