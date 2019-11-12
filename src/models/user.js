import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const User = new Schema({
    firstName: {
        type: Schema.Types.String,
        required: true
    },
    lastName: {
        type: Schema.Types.String,
        required: true
    },
    hashPassword: {
        type: Schema.Types.Number,
        required: true
    },
    tickets: {
        type: Schema.Types.String,
        required: true
    },
    role: {
        type: Schema.Types.String,
        required: true
    }
})