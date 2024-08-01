import { Schema,model } from "mongoose";

const gallerySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    images:{
        type:[String],
    },
},{timestamps:true});

export default model("Gallery",gallerySchema);