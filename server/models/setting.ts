import mongoose, { Schema, Document } from 'mongoose';

export interface SettingInterface extends Document {
    name: string,
}

const SettingSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
});

export const Setting = mongoose.model<SettingInterface>('Setting', SettingSchema);

