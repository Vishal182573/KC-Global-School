import { Schema,model } from "mongoose";

const formSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    class:{
        type:Number,
        required:true,
    },
    currentSchoolName:{
        type:String
    },
    fatherName:{
        type:String,
        required:true
    },
    motherName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    address:{
        type:String
    }
},{timestamps:true});

export default model("Form",formSchema);