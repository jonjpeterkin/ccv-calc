import React, { Component } from 'react'

export default class StepGraphic extends Component {

	componentDidMount() {
    this.draw(this.props.bp)
  }

  draw(bp) {
	  var ctx = this.refs.graphic.getContext('2d')
		bp.base(ctx)
  }

	render() {
		return (
			<div>
			  <canvas ref={'graphic'} id="stepGraphic" width="420" height="300"></canvas>
			</div>
		)
	}
}