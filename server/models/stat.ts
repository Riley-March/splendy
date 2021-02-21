import mongoose, { Schema, Document } from 'mongoose';
import { Ticket } from './ticket';

export interface StatInterface extends Document {
    event_name: string,
}

const StatSchema: Schema = new Schema({
    event_name: {
        type: String,
        required: true
    },
});

export const Stat = mongoose.model<StatInterface>('Stat', StatSchema);
