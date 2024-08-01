import express from "express";
import {
    addCoursorel,
    deleteCoursorel,
    getCoursorelById,
    getAllCoursorels
} from "../controllers/coursorelController.js";

const router = express.Router();

router.post("/add", addCoursorel);
router.delete("/:id", deleteCoursorel);
router.get("/:id", getCoursorelById);
router.get("/", getAllCoursorels);

export default router;
