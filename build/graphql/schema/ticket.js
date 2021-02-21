"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticket = void 0;
var apollo_server_1 = require("apollo-server");
exports.ticket = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    type Ticket {\n        _id: ID!\n        name: String!\n        event_id: ID!\n        price: String!,\n        quantity: Int!,\n    }\n\n    input TicketInput {\n        name: String!\n        event_id: ID!\n        price: String!,\n        quantity: Int!,\n    }\n\n    extend type Query {\n        tickets(event_id: ID!): [Ticket]\n    }\n    \n    extend type Mutation {\n        create_ticket(ticket_input: TicketInput): Ticket\n        delete_ticket(ticket_id: ID!): Ticket\n    }\n\n"], ["\n\n    type Ticket {\n        _id: ID!\n        name: String!\n        event_id: ID!\n        price: String!,\n        quantity: Int!,\n    }\n\n    input TicketInput {\n        name: String!\n        event_id: ID!\n        price: String!,\n        quantity: Int!,\n    }\n\n    extend type Query {\n        tickets(event_id: ID!): [Ticket]\n    }\n    \n    extend type Mutation {\n        create_ticket(ticket_input: TicketInput): Ticket\n        delete_ticket(ticket_id: ID!): Ticket\n    }\n\n"])));
var templateObject_1;
