import React, { Component } from 'react'
import StepGraphic from './StepGraphic'

class Step extends Component {

	render() {
		return (
			<div className='step'>
				<p>STEP {this.props.num}</p>
				{this.props.desc}
				<StepGraphic bp={this.props.bp} {...this.props.canvasDims} />
				<br />
			</div>
		)
	}
}

export default Step