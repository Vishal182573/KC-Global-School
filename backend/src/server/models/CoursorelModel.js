import { Schema,model } from "mongoose";

const coursorelSchema = new Schema({
    images:{
        type:[String]
    }
},{timestamps:true});

export default model("Coursorel",coursorelSchema);