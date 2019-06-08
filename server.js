const express = require('express');

// Initailize express, parse JSON
const app = express();
app.use(express.json());

// Set the port, set a server on the port...
const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
	console.log(`Listening on port ${port}`);
});
