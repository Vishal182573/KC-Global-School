"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Bike } from "lucide-react";
import { FaRunning } from "react-icons/fa";



export default function Sports() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4 text-green-600">Sports</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Building character, teamwork, and physical fitness through competitive and recreational sports.
        </p>
      </motion.div>

      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://drive.google.com/uc?export=download&id=18mfbJjJ_D5TMkpBm8URYe5xgs2-LNyx8"
            alt="Sports at KC Global School"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <blockquote className="text-white text-2xl italic max-w-2xl text-center">
              "You need to have the fighting spirit. You have to force moves and take risks."
              <footer className="mt-4 text-lg">- Vishwanathan Anand (Chess Grandmaster)</footer>
            </blockquote>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Our Sports Program</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At KC Global School, we recognize the vital role that sports play in the overall development of students. Our sports program is designed to promote physical fitness, teamwork, discipline, and leadership skills. We offer a wide range of sports and physical activities catering to diverse interests and abilities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe that participation in sports not only enhances physical health but also fosters a sense of camaraderie and school spirit. Our dedicated coaches work closely with students to develop their skills, encourage sportsmanship, and build confidence. Whether students are beginners or advanced athletes, our inclusive sports program provides opportunities for everyone to compete, learn, and grow.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Balanced Development</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            In addition to regular physical education classes, sports days, and tournaments, we provide students with a platform to showcase their talents and excel in their chosen disciplines. We also emphasize the importance of balancing academics and sports, ensuring that students develop a well-rounded personality.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At KC Global School, we are committed to nurturing not only academic achievers but also well-rounded individuals who value fitness, resilience, and teamwork. Our sports program is an integral part of our holistic approach to education, preparing students for the challenges of life both on and off the field.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-green-50 rounded-xl p-8 mb-16"
      >
        <h2 className="text-3xl font-semibold text-green-600 mb-6 text-center">Key Features of Our Sports Program</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Wide range of sports",
            "Dedicated coaches",
            "Regular tournaments",
            "Inclusive participation",
            "Physical fitness focus",
            "Balanced development"
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Trophy className="text-green-500 w-6 h-6" />
              <span className="text-lg text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
