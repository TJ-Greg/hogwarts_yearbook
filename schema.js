const axios = require('axios');
const config = require('config');

const {
	GraphQLObjectType,
	GraphQLBoolean,
	GraphQLString,
	GraphQLSchema,
	GraphQLList
} = require('graphql');

const CharacterType = new GraphQLObjectType({
	name: 'Character',
	fields: () => ({
		name: { type: GraphQLString },
		house: { type: GraphQLString }
	})
});

const params = config.get('access');

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: () => ({
		characters: {
			type: new GraphQLList(CharacterType),
			resolve(parent, args) {
				return axios
					.get('https://www.potterapi.com/v1/characters', params)
					.then(res => res.data);
			}
		}
	})
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
