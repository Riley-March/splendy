import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import './TicketPage.css';

import { Card } from '../../components/Card/Card';
import { Toolbar } from '../../components/Toolbar/Toolbar';
import { Spinner } from '../../components/Spinner/Spinner';
import { storage_get_item, storage_set_item } from '../../helpers/storage';
import { get_color } from '../../helpers/colors';

const GET_TICKETS = gql`
    query Tickets($event_id: ID!) { 
        tickets(event_id: $event_id) {
			_id
            event_id
            name
            price
            quantity
		}
	}
`;

export const TicketPage = () => {
    const [ tickets, setTickets ]: any = useState([]);
    const [ loading, setLoading ] = useState(false);

    const event_id = '6031cad12260322fd75a6c93';
    const { data: ticketsData } = useQuery(GET_TICKETS, {
        variables: {event_id: event_id}
    });

    useEffect(() => {
        //const ws = new WebSocket(`ws://${process.env.REACT_APP_API_URL}`);
        //ws.onopen = () => {
        //    console.log('Connected to Web Socket');
        //}
        //ws.onmessage = (evt) => {
        //    if(evt) {
        //        const cached_app_settings = storage_get_item('app_settings');
        //        let tickets = JSON.parse(evt.data)[0].tickets;
        //        if(cached_app_settings) {
        //            tickets = tickets.map((ticket: any, index: number) => 
        //                ({...ticket, visible: cached_app_settings[index].is_checked})
        //            );
        //            
        //        } else {
        //            tickets = tickets.map((ticket: any) => ({...ticket, visible: true}));
        //        }
        //        setTickets(tickets);
        //        tickets.forEach((ticket: any) => {
        //            if(ticket.quantity > 0) {
        //                addNotification({
        //                    title: `${ticket.quantity} x ${ticket.name} Available`,
        //                    subtitle: 'Splendy',
        //                    theme: 'darkblue',
        //                    native: true
        //                });
        //            }
        //        });
        //        setLoading(false);
        //    }
        //}
        //return () => { ws.close(); }
    }, []);

    const handleTicketFilter = (e: any) => {
        const clicked_ticket = e.currentTarget.value;
        update_tickets(clicked_ticket);
        update_app_setting_storage(clicked_ticket);
    }

    const update_tickets = (clicked_ticket: any) => {
        let filtered_tickets: any[] = [...tickets];
        filtered_tickets = filtered_tickets.map((ticket: any) => {
            if(ticket.name === clicked_ticket){
                ticket.visible = !ticket.visible;
            }
            return ticket;
        });
        setTickets(filtered_tickets);
    }

    const update_app_setting_storage = (clicked_ticket: any) => {
        let app_settings = storage_get_item('app_settings');
        app_settings = app_settings.map((item: any) => {
            if(item.title === clicked_ticket){
                item.is_checked = !item.is_checked;
            }
            return item;
        });
        storage_set_item('app_settings', app_settings);
    }
    
    return(
        <div>
            {loading ? <Spinner /> : (
                <React.Fragment>
                    <Toolbar 
                        title='Toggle Visible Tickets' 
                        items={tickets}
                        handleClick={handleTicketFilter}
                        has_checkbox={true}
                    />
                    <div className="ticket-page">
                        <div className="card-grid">
                            {ticketsData && ticketsData.tickets.map((ticket: any, index: number) => {
                                return (
                                    <Card {...ticket} color={get_color(index)} />
                                )
                            })}
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}
