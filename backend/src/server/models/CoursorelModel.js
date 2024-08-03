import { Schema,model } from "mongoose";

const coursorelSchema = new Schema({
    image:{
        type:String
    }
},{timestamps:true});

export default model("Coursorel",coursorelSchema);