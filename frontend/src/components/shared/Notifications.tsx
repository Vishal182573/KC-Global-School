"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Calendar, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { BACKEND_URL } from "@/lib/constant";

interface Notification {
  id: number;
  date: string;
  title: string;
  description: string;
}

const fetchNotifications = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/notifications`);
    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error fetching notifications:', error);
  }
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

  return (
    <Card className="h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-b from-purple-50 to-white shadow-2xl rounded-xl">
      <CardHeader className="sticky top-0 bg-white bg-opacity-90 z-10 border-b border-purple-100">
        <CardTitle className="text-3xl font-bold text-purple-700 flex items-center">
          <Bell className="mr-3 h-8 w-8" />
          Recent Notices
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-y-auto h-full pb-6">
        <AnimatePresence>
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-4">
                    <div className="flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg text-purple-800">
                          {notification.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs px-2 py-1 bg-purple-100 text-purple-700">
                          <Calendar className="mr-1 h-3 w-3" />
                          {notification.date}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {notification.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center h-full text-gray-500"
            >
              <Bell className="h-16 w-16 mb-4 text-purple-300" />
              <p className="text-lg">No new notifications</p>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default Notifications;