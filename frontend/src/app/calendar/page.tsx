"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isToday,
} from "date-fns";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const previousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 max-w-7xl"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl font-bold mb-4 text-center text-blue-600"
      >
        School Calendar
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl font-semibold mb-8 text-center text-gray-700"
      >
        2024-2025
      </motion.h2>
      <div className="mb-4 text-center">
        <a href="#" className="text-blue-600 hover:underline">
          Download in PDF format
        </a>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <Button onClick={previousMonth} variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <h2 className="text-2xl font-bold">
              {format(currentMonth, "MMMM yyyy")}
            </h2>
            <Button onClick={nextMonth} variant="outline">
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="font-bold text-gray-500">
                {day}
              </div>
            ))}
            {days.map((day: any, dayIdx: any) => (
              <motion.div
                key={day.toString()}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: dayIdx * 0.01, duration: 0.2 }}
                className={`
                  p-2 border rounded-full
                  ${!isSameMonth(day, currentMonth) && "text-gray-300"}
                  ${isToday(day) && "bg-blue-100 font-bold text-blue-600"}
                `}
              >
                {format(day, "d")}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
