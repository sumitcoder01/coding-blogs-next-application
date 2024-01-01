import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;
const ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
});
const Contact = mongoose.models.contacts || mongoose.model('contacts', ContactSchema);
export default Contact;