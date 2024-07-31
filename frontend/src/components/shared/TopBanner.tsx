"use client"

import React from "react";
import { motion } from "framer-motion";

export default function TopBanner() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-red-700 p-2 w-full flex justify-between items-center text-white text-xs px-8 "
    >
        <div>KC GLOBAL SCHOOL</div>
        <div className="flex justify-between items-center space-x-6">
            <div>Call : +91 xxxxxxxxxx</div>
            <div>Email : kcglobalschool@gmail.com</div>
        </div>
    </motion.header>
  );
}