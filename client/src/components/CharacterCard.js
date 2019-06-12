import React from 'react';
import { Card, CardBody } from 'reactstrap';

export default function CharacterCard({ character: { name, house } }) {
	return (
		<Card className="mt-3">
			<CardBody>
				<h4>{name}</h4>
				<h6>{house ? house : 'Did not attend Hogwarts'}</h6>
			</CardBody>
		</Card>
	);
}
