import mongoose, { Schema, Document } from 'mongoose';
import { Ticket } from './ticket';

export interface StatInterface extends Document {
    event_name: string,
    tickets: Array<Ticket>,
}

const StatSchema: Schema = new Schema({
    event_name: {
        type: String,
        required: true
    },
    tickets: [{
        type: Schema.Types.ObjectId, ref: 'Ticket',
        required: true
    }]
});

export const Stat = mongoose.model<StatInterface>('Stat', StatSchema);
