import asyncHandler from "express-async-handler";
import Form from "../models/FormModel.js";  

const SubmitForm = asyncHandler(async (req, res) => {
    try {
        const {firstName,lastName,fatherName,motherName,email,phoneNumber,address} = req.body;

        const newForm = new Form({
            firstName,
            lastName,
            fatherName,
            motherName,
            email,
            phoneNumber,
            address
        });
        const savedForm = await newForm.save();
        res.status(200).json(savedForm);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

const getEnquiries = asyncHandler(async(req,res)=>{
    try{
        const enquires = await Form.find();
        return res.status(200).json(enquires);
    }catch(err){
        return res.status(500).json({message:"Internal Server Error"});
    }
})

export {
    SubmitForm,
    getEnquiries,
};

