import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Solution from './Solution'
import buildSolution from '../actions/buildSolution'

class Solutions extends Component {
	constructor(props) {
		super(props)
		this.state = {loaded: false}
	}

	componentWillMount() {
		this.buildContents(this.props)
	}

	componentWillUpdate(nextProps) {
		this.buildContents(nextProps)
	}

	buildContents(props) {
		// this.props.methods.forEach((method) => this.buildSolution(this.props.prob, method))
		if(props.prob && !props.sols) {
			props.buildSolution(props.prob, 'pvc')
			this.setState({loaded: true})
		} else if(!props.prob) {
			this.setState({loaded: false})
		}
	}

	renderSolutions() {
		// this.props.methods.forEach((method) => this.buildSolution(this.props.prob, method))
		if(this.props.prob && !this.props.sols) {
			// return "SOLUTIONS GO HERE (NO SOLS)"
			return ""
		} else if(!this.props.prob) {
			// return "SOLUTIONS GO HERE (ENTER A PROBLEM)"
			return ""
		}
		return <Solution name='pvc' desc='Grade 2 Common Core Strategy' />
	}

	render() {
		return (
			<div>
				{this.renderSolutions()}
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