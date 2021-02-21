import mongoose, { Types, Schema, Document } from 'mongoose';

export interface TicketInterface extends Document {
    name: string,
    event_id: String,
    price: string,
    quantity: number,
}

const TicketSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    event_id: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
});

export const Ticket = mongoose.model<TicketInterface>('Ticket', TicketSchema);

