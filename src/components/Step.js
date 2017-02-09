import React, { Component } from 'react'
import StepGraphic from './StepGraphic'

class Step extends Component {

	render() {
		return (
			<div>
				STEP 1
				<StepGraphic bp={this.props.bp} />
				{this.props.desc}
			</div>
		)
	}
}

export default Step