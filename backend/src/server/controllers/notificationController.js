import asyncHandler from "express-async-handler";
import Notification from "../models/NotificationsModel.js";  

// Push a new notification
const pushNotification = asyncHandler(async (req, res) => {
    try {
        const { title, description } = req.body;

        const newNotification = new Notification({
            title,
            description
        });
        const savedNotification = await newNotification.save();
        res.status(200).json(savedNotification);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// Delete a notification by ID
const deleteNotification = asyncHandler(async (req, res) => {
    try {
        const notificationId = req.params.id;

        const deletedNotification = await Notification.findByIdAndDelete(notificationId);
        if (!deletedNotification) {
            return res.status(404).json({ message: "Notification not found" });
        }
        res.status(200).json({ message: "Notification deleted successfully" });
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// Get a notification by ID
const getNotificationById = asyncHandler(async (req, res) => {
    try {
        const notificationId = req.params.id;

        const notification = await Notification.findById(notificationId);
        if (!notification) {
            return res.status(404).json({ message: "Notification not found" });
        }
        res.status(200).json(notification);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// Get all notifications
const getAllNotifications = asyncHandler(async (req, res) => {
    try {
        const notifications = await Notification.find().sort({ createdAt: -1 });
        res.status(200).json(notifications);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

export {
    pushNotification,
    deleteNotification,
    getNotificationById,
    getAllNotifications
};
