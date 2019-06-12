import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import HomePage from './components/HomePage';
import AllCharacters from './components/AllCharacters';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
	uri: '/graphql'
});

function App() {
	return (
		<div className="App">
			<ApolloProvider client={client}>
				<Router>
					<Fragment>
						<AppNavbar />
						<Container>
							<Switch>
								<Route exact path="/" component={HomePage} />
								<Route exact path="/all" component={AllCharacters} />
							</Switch>
						</Container>
					</Fragment>
				</Router>
			</ApolloProvider>
		</div>
	);
}

export default App;
