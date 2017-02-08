import { numRep, base } from './pvc'

const step1BP = (prob, ctx) => {
	base(ctx)
	for(var int of prob.ints) {
		for(var digit of int.digits) {
			for(var i = 0; i < digit.val; i++) {
				numRep(ctx, (420 - (120 * (Math.log10(digit.place) + 1))) + (i * 22), 80 * int.pos)
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