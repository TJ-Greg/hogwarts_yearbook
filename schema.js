const axios = require('axios');
const { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql')

const Character = new GraphQLObjectType({
  name: 'Character',
  fields: () => ({
    name: { type: GraphQLString},
    house: { type: GraphQLString }
  })
})