import express from "express";
import {
    addGallery,
    deleteGallery,
    getGalleryById,
    getAllGalleries
} from "../controllers/galleryController.js";

const router = express.Router();

router.post("/add", addGallery);
router.delete("/:id", deleteGallery);
router.get("/:id", getGalleryById);
router.get("/", getAllGalleries);

export default router;
