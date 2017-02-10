import React, { Component } from 'react'
import StepGraphic from './StepGraphic'

class Step extends Component {

	render() {
		return (
			<div className='step'>
				<p>STEP {this.props.num}</p>
				<StepGraphic bp={this.props.bp} />
				{this.props.desc}
			</div>
		)
	}
}

export default Step