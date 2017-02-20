const chartBase = ctx => {
	// ctx.strokeStyle = '#000000'
	var chartBase = new Path2D('M0 50 h 420 M140 0 v 300 M280 0 v 300')
	ctx.stroke(chartBase)
	ctx.font = '24px Roboto'
	ctx.fillText('Hundreds', 20, 30)
	ctx.fillText('Tens', 184, 30)
	ctx.fillText('Ones', 320, 30)
}

export default chartBase