import React, { Component } from 'react';
import { Container } from 'reactstrap';

const axios = require('axios');

export default class HomePage extends Component {
	state = {
		house: null
	};

	componentDidMount() {
		axios.get('https://www.potterapi.com/v1/sortingHat').then(res =>
			this.setState({
				house: res.data
			})
		);
	}

	render() {
		return (
			<Container className="bg-secondary border rounded text-center">
				<div>
					<h1>Welcome, Visitor</h1>
					<h3>You've been selected for the house</h3>
					<h3>{this.state.house}</h3>
				</div>
			</Container>
		);
	}
}
