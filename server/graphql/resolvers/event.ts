import { Event } from '../../models/event';

export default {
    
	Query: {

		event: async (_, { event_id }) => {
			try {
                console.log(event_id);
                const event = await Event.findOne({_id: event_id});
				return event;
			} catch (err) {
				throw err;
			}
		},

		events: async () => {
			try {
				const events = await Event.find();
				return events;
			} catch (err) {
				throw err;
			}
		},

	},

	Mutation: {

		create_event: async (_, { event_input }) => {
			const event = new Event({
				name: event_input.name,
				date: event_input.date,
			});
			const result = await event.save();
			return result;
		},

		delete_event: async (_, { event_id }) => {
			try {
				await Event.deleteOne({_id: event_id});
				return;
			} catch (err) {
				throw err;
			}
		},	
	}

};
