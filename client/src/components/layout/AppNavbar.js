import React, { Component, Fragment } from 'react';
import {
	Navbar,
	Container,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

export default class AppNavbar extends Component {
	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		return (
			<div>
				<Navbar
					color="dark"
					dark
					expand="sm"
					className="mb-5 border border border-info rounded"
				>
					<Container>
						<NavbarBrand href="/">Hogwarts Yearbook</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<Fragment>
									<NavItem>
										<NavLink href="/all">All</NavLink>
									</NavItem>
								</Fragment>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}
