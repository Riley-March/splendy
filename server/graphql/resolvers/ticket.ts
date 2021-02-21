import { Ticket } from '../../models/ticket';

export default {
    
	Query: {

		tickets: async (_, { event_id }) => {
			try {
                const tickets = await Ticket.find({event_id: event_id});
				return tickets;
			} catch (err) {
				throw err;
			}
		},

	},

	Mutation: {

		create_ticket: async (_, { ticket_input }) => {
			const ticket = new Ticket({
				name: ticket_input.name,
                event_id: ticket_input.event_id,
                price: ticket_input.price,
                quantity: ticket_input.quantity
			});
			const result = await ticket.save();
			return result;
		},

		delete_ticket: async (_, { ticket_id }) => {
			try {
				await Ticket.deleteOne({_id: ticket_id});
				return;
			} catch (err) {
				throw err;
			}
		},	
	}

};
