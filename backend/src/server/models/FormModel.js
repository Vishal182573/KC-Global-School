import { Schema, model } from "mongoose";

const formSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default model("Form", formSchema);