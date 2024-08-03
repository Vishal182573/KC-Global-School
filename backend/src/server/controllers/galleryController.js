import asyncHandler from "express-async-handler";
import Gallery from "../models/GalleryModel.js";

// Add a new gallery
const addGallery = asyncHandler(async (req, res) => {
    try {
        const { title, images } = req.body;
        const newGallery = new Gallery({
            title,
            images
        });
        const savedGallery = await newGallery.save();
        res.status(200).json(savedGallery);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// Delete a gallery by ID
const deleteGallery = asyncHandler(async (req, res) => {
    try {
        const galleryId = req.params.id;

        const deletedGallery = await Gallery.findByIdAndDelete(galleryId);
        if (!deletedGallery) {
            return res.status(404).json({ message: "Gallery not found" });
        }
        res.status(200).json({ message: "Gallery deleted successfully" });
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// Get a gallery by ID
const getGalleryById = asyncHandler(async (req, res) => {
    try {
        const galleryId = req.params.id;

        const gallery = await Gallery.findById(galleryId);
        if (!gallery) {
            return res.status(404).json({ message: "Gallery not found" });
        }
        res.status(200).json(gallery);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// Get all galleries
const getAllGalleries = asyncHandler(async (req, res) => {
    try {
        const galleries = await Gallery.find().sort({ createdAt: -1 });
        res.status(200).json(galleries);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

export {
    addGallery,
    deleteGallery,
    getGalleryById,
    getAllGalleries
};
