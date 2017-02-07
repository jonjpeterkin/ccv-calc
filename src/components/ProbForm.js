import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import submitProblem from '../actions/submitProblem'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


class ProbForm extends Component {
	constructor(props) {
		super(props)
		this.state = {prob: ""}
	}

	handleChange(event) {
		this.setState({prob: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log(`submitted: ${this.state.prob}`)
		this.props.submitProblem(this.state)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<TextField name="prob"
						floatingLabelText="Enter a simple math problem"
						floatingLabelFixed={false}
						onChange={this.handleChange.bind(this)} />
					<FlatButton label="Solve" name="submit" type="submit"
						backgroundColor="#a4c639"
						hoverColor="#8AA62F"
						style={{margin: 12}} />
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({submitProblem}, dispatch)
}

export default connect(null, mapDispatchToProps)(ProbForm)
