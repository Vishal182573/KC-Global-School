"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BANNER } from "../../../public";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <header className="relative py-16">
        <div className="absolute inset-0">
          <Image
            src={BANNER}
            alt="Background image for KC Global School"
            layout="fill"
            objectFit="cover"
            className="w-full  object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">About KC Global School</h1>
          <p className="text-2xl italic text-white">Where Every Child's Future is Bright</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r bg-blue-800 text-white rounded-lg shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl leading-relaxed">
            WE AT KC GLOBAL WAKE UP WITH DETERMINATION WHERE EVERY CHILD'S FUTURE IS BRIGHT
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-blue-600">About Us</h2>
            <p className="text-lg mb-6 leading-relaxed">
              KC Global School is a private, co-educational institute known for providing a top-notch education in English. We are committed to create a welcoming and inclusive environment where students from all backgrounds can thrive. Our school offers a broad curriculum designed to cater to the individual needs and interests of each student.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              We emphasize not only academic excellence but also the importance of personal growth and development. Our state-of-the-art facilities and modern teaching methods help students stay engaged and enthusiastic about learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src="https://drive.google.com/uc?export=download&id=1GY-umVIhd4gvox5B2hT3uY7Djh8-DBbW"  // Replace with actual image path
              alt="KC Global School"
              width={600}
              height={400}
              layout="responsive"
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">Our Approach</h2>
          <p className="text-lg mb-6 leading-relaxed">
            We believe in nurturing critical thinking, creativity, and leadership skills, preparing our students to succeed in a rapidly changing world. Our dedicated teachers are passionate about education and work closely with students to ensure they reach their full potential.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            At KC Global School, we value the importance of a well-rounded education. We encourage students to participate in a variety of extracurricular activities, from sports to arts, helping them discover and develop their talents.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">Our Commitment</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Our supportive community and strong focus on character building ensure that students grow into responsible, confident individuals ready to make a positive impact in the world. Join us at KC Global School, where education meets excellence and every child's future is bright.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-blue-100 rounded-lg p-8"
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">Core Values</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Excellence in Education
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Inclusivity and Diversity
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Innovation and Creativity
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Character Development
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Integrity and Commitment
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Respect and Service
            </li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}
