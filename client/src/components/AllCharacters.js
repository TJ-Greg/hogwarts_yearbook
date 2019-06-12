import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import CharacterCard from './CharacterCard';

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
					<Query query={CHARACTERS_QUERY}>
						{({ loading, error, data }) => {
							if (loading) return <h4>Loading</h4>;
							if (error) console.log(error);
							console.log(data);
							return (
								<Fragment>
									{data.characters.map(character => (
										<CharacterCard character={character} />
									))}
								</Fragment>
							);
						}}
					</Query>
				</div>
			</Container>
		);
	}
}
