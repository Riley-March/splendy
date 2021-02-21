import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Button } from 'reactstrap';

import './Card.css';

const GET_EVENT = gql`
    query Event($event_id: ID!) { 
        event(event_id: $event_id) {
			_id
            name
            ticket_url
		}
	}
`;

type Props = {
    name: string,
    event_id: string,
    price: string,
    quantity: number,
    color: string
};

export const Card = ({ name, event_id, quantity, price, color }: Props) => {
    const { data: eventData } = useQuery(GET_EVENT, {
        variables: {event_id: event_id}
    });

    const openUrlHandler = () => {
        console.log('clicked');
    }

    return (
        <div className={`card card-${color}`}>
            {eventData && (
            <div >
                <h1 data-testid="title" className="title">
                    {name}
                </h1>
                <h1 data-testid="sub-title" className="sub-title">
                    {eventData.event.name}
                </h1>
                <h1 data-testid="sub-title" className="sub-title">
                    {price}
                </h1>
                <h1 data-testid="quantity" className="quantity">
                    {quantity}
                </h1>
                <Button color="primary" onClick={openUrlHandler}>
                    Book Now
                </Button>
            </div>
        )}
        </div>
    );
}
