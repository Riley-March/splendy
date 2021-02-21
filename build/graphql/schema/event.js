"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
var apollo_server_1 = require("apollo-server");
exports.event = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    type Event {\n        _id: ID!\n        name: String!\n        date: String!\n        ticket_url: String,\n    }\n\n    input EventInput {\n        name: String!\n        date: String!\n        ticket_url: String!\n    }\n\n    extend type Query {\n\t\tevent(event_id: ID!): Event\n        events: [Event]\n    }\n    \n    extend type Mutation {\n        create_event(event_input: EventInput): Event\n\t\tdelete_event(event_id: ID!): Event\n    }\n\n"], ["\n\n    type Event {\n        _id: ID!\n        name: String!\n        date: String!\n        ticket_url: String,\n    }\n\n    input EventInput {\n        name: String!\n        date: String!\n        ticket_url: String!\n    }\n\n    extend type Query {\n\t\tevent(event_id: ID!): Event\n        events: [Event]\n    }\n    \n    extend type Mutation {\n        create_event(event_input: EventInput): Event\n\t\tdelete_event(event_id: ID!): Event\n    }\n\n"])));
var templateObject_1;
