"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">About Our School</h1>
          <p className="text-xl">Nurturing Minds, Shaping Futures</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-6">
              At [School Name], we are committed to providing a nurturing and
              challenging educational environment that empowers students to
              become lifelong learners, critical thinkers, and responsible
              global citizens.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
            <ul className="list-disc list-inside text-lg">
              <li>Excellence in Education</li>
              <li>Inclusivity and Diversity</li>
              <li>Innovation and Creativity</li>
              <li>Character Development</li>
              <li>Community Engagement</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            // actual img src should be added here
            <div className="h-64 bg-gray-300">[School Image Placeholder]</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-semibold mb-4">Our History</h2>
          <p className="text-lg mb-6">
            Founded in [Year], [School Name] has a rich history of academic
            excellence and community involvement. Over the years, we have
            continuously evolved our curriculum and facilities to meet the
            changing needs of our students and prepare them for the challenges
            of the 21st century.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-semibold mb-4">Our Achievements</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Consistently high academic performance in national exams</li>
            <li>Award-winning extracurricular programs</li>
            <li>State-of-the-art facilities for STEM education</li>
            <li>Strong alumni network in various professional fields</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}
