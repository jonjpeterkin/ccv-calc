import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Solution from './Solution'
import buildSolution from '../actions/buildSolution'

class Solutions extends Component {

	componentWillMount() {
		// this.props.methods.forEach((method) => this.buildSolution(this.props.prob, method))
		this.props.buildSolution(this.props.prob, 'pvc')
	}

	renderSolutions() {
		debugger
		return <Solution sol={this.props.sols.pvc} />
	}

	render() {
		return (
			<div>
				{this.renderSolutions}
			</div>
		)
	}

}

function mapStateToProps(state) {
	return {prob: state.prob, methods: state.methods, sols: state.sols}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ buildSolution }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Solutions)