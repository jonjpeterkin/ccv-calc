import React, { Component } from 'react'
import StepGraphic from './StepGraphic'

class Step extends Component {

	render() {
		return (
			<div>
				<p>STEP 1</p>
				<StepGraphic bp={this.props.bp} />
				{this.props.desc}
			</div>
		)
	}
}

export default Step