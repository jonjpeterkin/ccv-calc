import React, { Component } from 'react'
import Input from 'react-toolbox/lib/input'

export default class ProbForm extends Component {
	constructor(props) {
		super(props)
		this.state = {prob: ""}
	}

	handleChange(value) {
		this.setState({prob: value})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log(`submitted: ${this.state.prob}`)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<Input type='text' label='Problem' name='prob'
						value={this.state.prob} onChange={this.handleChange.bind(this)} />
					<Input type='submit' />
				</form>
			</div>
		)
	}
}
