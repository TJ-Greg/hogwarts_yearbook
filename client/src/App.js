import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import AppNavbar from './components/AppNavbar';
import HomePage from './components/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Fragment>
					<AppNavbar />
					<Container>
						<Switch>
							<Route exact path="/" component={HomePage} />
						</Switch>
					</Container>
				</Fragment>
			</Router>
		</div>
	);
}

export default App;
