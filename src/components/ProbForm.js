import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import submitProblem from '../actions/submitProblem'
import reset from '../actions/reset'

import spacing from 'material-ui/styles/spacing';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class ProbForm extends Component {
	constructor(props) {
		super(props)
		this.state = {prob: "", zDepth: 1, solveDisable: true}
	}

	handleFocus() {
		this.setState({zDepth: 3, solveDisable: false})
	}

	handleBlur() {
		this.setState({zDepth: 1})
	}

	handleChange(event) {
		this.setState({prob: event.target.value, solveDisable: false})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log(`submitted: ${this.state.prob}`)
		this.setState({solveDisable: true})
		this.props.reset()
		this.props.submitProblem(this.state)
	}

	render() {
		return (
			<div>
				<Paper
					zDepth={this.state.zDepth}
					style={{
						maxWidth: '450px',
						minHeight: '105px',
						margin: `0 auto ${spacing.desktopGutter}px auto`,
					}}
					onFocus={this.handleFocus.bind(this)}
					onBlur={this.handleBlur.bind(this)}
				>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<TextField name="prob"
						style={{fontSize: '18px', marginLeft: 40}}
						floatingLabelText="Enter a simple math problem"
						floatingLabelFixed={false}
						underlineShow={false}
						onChange={this.handleChange.bind(this)} />
					<RaisedButton label="Solve" name="submit" type="submit"
						disabled={this.state.solveDisable}
						backgroundColor="#a4c639"
						style={{margin: 10, marginLeft: 20}} />
				</form>
				</Paper>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({submitProblem, reset}, dispatch)
}

export default connect(null, mapDispatchToProps)(ProbForm)

// import {orange500, blue500, green500, black500} from 'material-ui/styles/colors';
// const styles = {
//   errorStyle: {
//     color: orange500,
//   },
//   underlineFocusStyle: {
//     borderColor: green500,
//   },
//   floatingLabelStyle: {
//     color: green500,
//   },
//   floatingLabelFocusStyle: {
//     color: blue500,
//   },
// };
// 				JSX:
// 						floatingLabelStyle={styles.floatingLabelStyle}
// 						underlineStyle={{color: black500}}
// 						underlineFocusStyle={styles.underlineFocusStyle}
//			 :JSX
