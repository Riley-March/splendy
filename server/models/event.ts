import mongoose, { Schema, Document } from 'mongoose';

export interface EventInterface extends Document {
    name: string,
    date: string,
    ticket_url: string,
}

const EventSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    ticket_url: {
        type: String,
        required: true
    }
});

export const Event = mongoose.model<EventInterface>('Event', EventSchema);
