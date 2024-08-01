import { Schema,model } from "mongoose";

const notificationSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true});

export default model("Notification",notificationSchema);