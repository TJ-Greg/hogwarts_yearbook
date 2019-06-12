import React, { Component } from 'react';
import { Container } from 'reactstrap';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const CHARACTERS_QUERY = gql`
	query CharactersQuery {
		characters {
			name
			house
		}
	}
`;

export default class AllCharacters extends Component {
	render() {
		return (
			<Container className="bg-secondary border rounded text-center">
				<div>
					<h1>Display A list of all Characters here</h1>
					<Query query={CHARACTERS_QUERY}>
						{({ loading, error, data }) => {
							if (loading) return <h4>Loading</h4>;
							if (error) console.log(error);
							console.log(data);
							return <h4>Test...</h4>;
						}}
					</Query>
				</div>
			</Container>
		);
	}
}
