"use client"
import React from "react";
import Notifications from "@/components/shared/Notifications";
import { motion } from "framer-motion";

export default function NewsAndEvents() {
  return (
    <div className=" min-h-screen py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">News & Events</h1>
        <p className="text-xl text-gray-600">Stay updated with the latest news and events from our school</p>
      </header>
      <main className="container mx-auto px-4">
            <Notifications />
      </main>
    </div>
  );
}
