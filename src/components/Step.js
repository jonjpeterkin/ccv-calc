import React, { Component } from 'react'
import StepGraphic from './StepGraphic'

class Step extends Component {

	render() {
		return (
			<div>
				A STEP
				<StepGraphic bp={this.props.bp} />
			</div>
		)
	}
}

export default Step