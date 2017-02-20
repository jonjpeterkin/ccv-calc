const decompBase = ctx => {
	var decompBox = new Path2D('M0 70 v 100 h 80 v -100 h -80 M330 70 v 100 h 80 v -100 h -80')
	ctx.stroke(decompBox)
}

export default decompBase