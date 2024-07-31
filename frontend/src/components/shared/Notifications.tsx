"use client"

import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Notification {
  id: number;
  date: string;
  content: string;
}

const fetchNotifications = async () => {
  // Replace with your API call
  return [
    { id: 1, date: "2 FEB", content: "Admission Open for the Session 2024-25" },
    { id: 2, date: "1 FEB", content: "For daily updates like us on Facebook" },
    { id: 3, date: "1 FEB", content: "New sports facilities now available" },
    { id: 4, date: "31 JAN", content: "Parent-Teacher meeting scheduled for next week" },
    { id: 5, date: "30 JAN", content: "Annual day celebration preparations begin" },
    { id: 6, date: "29 JAN", content: "School trip announced for Grade 10 students" },
  ];
};

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const getNotifications = async () => {
      const data = await fetchNotifications();
      setNotifications(data);
    };

    getNotifications();
  }, []);

  const handleClick = ()=>{
    alert("Clicked");
  }
  return (
    <Card className=" h-96 overflow-y-auto bg-gradient-to-b from-purple-50 to-white shadow-xl">
      <div className="flex justify-between items-center mb-4 sticky top-0 bg-white bg-opacity-90 z-10 w-full p-4">
        <h2 className="text-2xl font-bold text-purple-700">Recent Notices</h2>
      </div>
      <ul className="space-y-4 px-3">
        {notifications.map((notification) => (
          <motion.li
            key={notification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800">{notification.content}</p>
                <p className="text-sm text-gray-500 mt-1">{notification.date}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-purple-600 hover:text-purple-800 hover:bg-purple-100"
                onClick={() => console.log(`Open notification ${notification.id}`)}
              >
                <ChevronRight size={20} onClick={handleClick}/>
              </Button>
            </div>
          </motion.li>
        ))}
      </ul>
    </Card>
  );
};

export default Notifications;