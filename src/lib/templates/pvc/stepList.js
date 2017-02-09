import { numRep, base } from './pvc'

function tokenCoords(int, digit, i) {
	var x = 465 - (140 * (Math.log10(digit.place) + 1)) + ((i % 3) * 25)
	var y = (90 * int.pos) + (25 * Math.floor((i / 3)))
	return {x, y}
}

const step1BP = (prob, ctx) => {
	base(ctx)
	for(var int of prob.ints) {
		for(var digit of int.digits) {
			for(var i = 0; i < digit.val; i++) {
				numRep(ctx, tokenCoords(int, digit, i).x, tokenCoords(int, digit, i).y)
			}
		}
	}
}

export const stepList = {
	1: {
		desc: "Draw a place value chart. Break each number up by place value and fill out the chart",
		num: "one",
		bp: step1BP
	}
}