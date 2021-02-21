import { gql } from 'apollo-server';

export const event = gql`

    type Event {
        _id: ID!
        name: String!
        date: String!
        ticket_url: String,
    }

    input EventInput {
        name: String!
        date: String!
        ticket_url: String!
    }

    extend type Query {
		event(event_id: ID!): Event
        events: [Event]
    }
    
    extend type Mutation {
        create_event(event_input: EventInput): Event
		delete_event(event_id: ID!): Event
    }

`;
    

