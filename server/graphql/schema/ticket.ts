import { gql } from 'apollo-server';

export const ticket = gql`

    type Ticket {
        _id: ID!
        name: String!
        event_id: ID!
        price: String!,
        quantity: Int!,
    }

    input TicketInput {
        name: String!
        event_id: ID!
        price: String!,
        quantity: Int!,
    }

    extend type Query {
        tickets(event_id: ID!): [Ticket]
    }
    
    extend type Mutation {
        create_ticket(ticket_input: TicketInput): Ticket
        delete_ticket(ticket_id: ID!): Ticket
    }

`;
    

