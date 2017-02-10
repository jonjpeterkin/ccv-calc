import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Step from './Step'
import spacing from 'material-ui/styles/spacing';
import {Card, CardActions, CardHeader, CardText, CardTitle, CardMedia} from 'material-ui/Card'
import Divider from 'material-ui/Divider'

class Solution extends Component {

	renderSteps() {
		//BROKN
		var allSteps = []
		for(var step in this.props.sols[this.props.name].steps) {
			allSteps.push(<Step {...this.props.sols[this.props.name].steps[step]} />)
		}
		return allSteps
		// return <Step {...this.props.steps[1]} />
	}

	render() {
		return (
			<div>
				<Card style={{
					margin: `0 auto ${spacing.desktopGutter}px auto`,
					maxWidth: '700px'
				}}>
				<CardHeader
				  title={this.props.name}
				  subtitle={this.props.desc}
				  actAsExpander={true}
				  showExpandableButton={true}
				/>
				<CardMedia
				  expandable={true}
				>
					{this.renderSteps()}
				</CardMedia>
				</Card>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {sols: state.sols}
}

export default connect(mapStateToProps, null)(Solution)
