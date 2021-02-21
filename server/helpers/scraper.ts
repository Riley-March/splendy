import cheerio from 'cheerio';
import axios from 'axios'
import { Ticket } from '../models/ticket';
import { readFile }  from 'fs/promises';

export const get_tickets = async (event_id: string) => {
    const ticket_file = await readFile('./helpers/tickets.json', 'utf-8');
    const tickets = JSON.parse(ticket_file);
    tickets.forEach( async (ticket_data: any) => {
        await Ticket.findOneAndUpdate(
            {name: ticket_data.name}, 
            {$set: {
                name: ticket_data.name,
                event_id: event_id,
                price: ticket_data.price,
                quantity: ticket_data.quantity
            }}, 
            {upsert: true}
        );
    });
        
}



//const get_select_values = async (ticket_name, select_name, url) => {
//    const $ = await fetch_data(url);
//    let select_quantity = 0;
//    $(`select[name=${select_name}]`).children().each((index, element) => {
//        const select_box = element.children[0].data;
//        if(select_box !== 'Select'){
//            select_quantity += 1;
//        }
//    });
//    const ticket = {
//        name: ticket_name,
//        quantity: select_quantity
//    };
//    return ticket;
//}
//
//const get_tickets = async (url) => {
//    let tickets = [];
//    const event_name = 'Splendour In The Grass';
//    const three_day = await get_select_values('3-Day', 'lQuantity0', url);
//    const friday = await get_select_values('Friday Only', 'lQuantity1', url);
//    const saturday = await get_select_values('Saturday Only', 'lQuantity2', url);
//    const sunday = await get_select_values('Sunday Only', 'lQuantity3', url);
//    const camping = await get_select_values('Camping', 'lQuantity12', url);
//    tickets.push(three_day, friday, saturday, sunday, camping);
//    Tickets.findOneAndUpdate(
//        {
//            event_name: event_name
//        },
//        { 
//            tickets: tickets
//        },
//        {
//            new: true,
//            runValidators: true
//        })
//    .then(doc => {
//        console.log(doc);
//    })
//    .catch(err => {
//        console.error(err);
//    });
//    //counter.create_event_stats(event_name, tickets);
//    //counter.calculate_daily_stats(event.tickets);
//}
//
//module.exports.get_tickets = get_tickets;
