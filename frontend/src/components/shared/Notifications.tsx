"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, ChevronRight, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: number;
  date: string;
  title: string;
  description: string;
}

const fetchNotifications = async () => {
  // api call for notifications
  const response = await fetch("/api/notifications");
  return response.json();
};

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const getNotifications = async () => {
      const data = await fetchNotifications();
      setNotifications(data);
    };
    getNotifications();
  }, []);

  const handleDelete = async (id: number) => {
    // api call for delete
    await fetch(`/api/notifications/${id}`, { method: "DELETE" });
    setNotifications(notifications.filter((n) => n.id !== id));
    toast({
      title: "Notification deleted",
      description: "The notification has been successfully removed.",
    });
  };

  return (
    <Card className="h-96 overflow-y-auto bg-gradient-to-b from-purple-50 to-white shadow-xl">
      <CardHeader className="sticky top-0 bg-white bg-opacity-90 z-10">
        <CardTitle className="text-2xl font-bold text-purple-700 flex items-center">
          <Bell className="mr-2" />
          Recent Notices
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {notification.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.description}
                      </p>
                      <div className="flex items-center mt-2">
                        <Badge variant="secondary">{notification.date}</Badge>
                      </div>
                    </div>
                    <div className="flex">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-600 hover:text-purple-800 hover:bg-purple-100"
                        onClick={() =>
                          console.log(`Open notification ${notification.id}`)
                        }
                      >
                        <ChevronRight size={20} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-800 hover:bg-red-100"
                        onClick={() => handleDelete(notification.id)}
                      >
                        <Trash2 size={20} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default Notifications;
