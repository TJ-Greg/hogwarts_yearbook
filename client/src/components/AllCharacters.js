import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class AllCharacters extends Component {
	render() {
		return (
			<Container className="bg-secondary border rounded text-center">
				<div>
					<h1>Display A list of all Characters here</h1>
				</div>
			</Container>
		);
	}
}
