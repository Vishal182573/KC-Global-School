import express from "express";
import {
    pushNotification,
    deleteNotification,
    getNotificationById,
    getAllNotifications
} from "../controllers/notificationController.js";

const router = express.Router();

router.post("/push", pushNotification);
router.delete("/:id", deleteNotification);
router.get("/:id", getNotificationById);
router.get("/", getAllNotifications);

export default router;
