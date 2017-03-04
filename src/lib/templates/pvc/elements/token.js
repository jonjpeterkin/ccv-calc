const token = (ctx, x, y, style = 'black') => {
	var token = new Path2D()
	ctx.fillStyle = style
	token.arc(x, y, 10, 0, 2 * Math.PI)
	ctx.fill(token)
}

export default token