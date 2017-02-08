

export const base = ctx => {
	// ctx.strokeStyle = '#000000'
	var chartBase = new Path2D('M0 50 h 420 M140 0 v 300 M280 0 v 300')
	ctx.stroke(chartBase)
	ctx.font = '24px Roboto';
	ctx.fillText('Hundreds', 20, 30);
	ctx.fillText('Tens', 190, 30);
	ctx.fillText('Ones', 320, 30);
}

export const numRep = ctx => {
	var token = new Path2D();
	token.arc(100, 35, 25, 0, 2 * Math.PI)
	ctx.fill(token)
}

