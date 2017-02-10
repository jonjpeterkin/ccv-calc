import { numRep, chartBase } from './pvc'

function tokenCoords(int, digit, i) {
	var x = 465 - (140 * (Math.log10(digit.place) + 1)) + ((i % 3) * 25)
	var y = (90 * int.pos) + (25 * Math.floor((i / 3)))
	return {x, y}
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

const step1BP = (prob, ctx) => {

}



export const pvcStepList = {
	1: {
		desc: "Decompose the problem.",
		num: 1,
		bp: step1BP
	},
	2: {
		desc: "Draw and fill out a place value chart.",
		num: 2,
		bp: step2BP
	}
}