import express from "express";
import { addImage, deleteImage, getAllImages } from "../controllers/coursorelController.js";

const router = express.Router();

router.post("/add", addImage);
router.delete("/:id", deleteImage);
router.get("/", getAllImages);

export default router;
