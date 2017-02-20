const token = (ctx, x, y) => {
	var token = new Path2D()
	token.arc(x, y, 10, 0, 2 * Math.PI)
	ctx.fill(token)
}

export default token