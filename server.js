const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');
const cors = require('cors');
const path = require('path');

// Initailize express, parse JSON
const app = express();
app.use(express.json());
app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

// Set the port, set a server on the port...
const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
	console.log(`Listening on port ${port}`);
});
