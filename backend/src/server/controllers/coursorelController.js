import asyncHandler from "express-async-handler";
import Coursorel from "../models/CoursorelModel.js";

// Add a new carousel
const addCoursorel = asyncHandler(async (req, res) => {
    try {
        const { images } = req.body;

        const newCoursorel = new Coursorel({
            images
        });
        const savedCoursorel = await newCoursorel.save();
        res.status(200).json(savedCoursorel);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// Delete a carousel by ID
const deleteCoursorel = asyncHandler(async (req, res) => {
    try {
        const coursorelId = req.params.id;

        const deletedCoursorel = await Coursorel.findByIdAndDelete(coursorelId);
        if (!deletedCoursorel) {
            return res.status(404).json({ message: "Coursorel not found" });
        }
        res.status(200).json({ message: "Coursorel deleted successfully" });
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// Get a carousel by ID
const getCoursorelById = asyncHandler(async (req, res) => {
    try {
        const coursorelId = req.params.id;

        const coursorel = await Coursorel.findById(coursorelId);
        if (!coursorel) {
            return res.status(404).json({ message: "Coursorel not found" });
        }
        res.status(200).json(coursorel);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// Get all carousels
const getAllCoursorels = asyncHandler(async (req, res) => {
    try {
        const coursorels = await Coursorel.find().sort({ createdAt: -1 });
        res.status(200).json(coursorels);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

export {
    addCoursorel,
    deleteCoursorel,
    getCoursorelById,
    getAllCoursorels
};
