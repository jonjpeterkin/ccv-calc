import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Step from './Step'

class Solution extends Component {

	renderSteps() {
		// return this.props.sol.steps.map((step) => {
		// 	return <Step bp={step.bp} />
		// })
		return <Step {...this.props.steps.one} />
	}

	render() {
		return (
			<div>
				{this.props.name}
				{this.renderSteps()}
			</div>
		)
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ buildBlueprint }, dispatch)
// }
export default connect(null, null)(Solution)
