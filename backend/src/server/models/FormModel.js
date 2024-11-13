import { Schema, model } from "mongoose";

const formSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
}, { timestamps: true });

export default model("Form", formSchema);