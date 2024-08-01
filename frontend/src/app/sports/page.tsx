"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Bike } from "lucide-react";
import { FaRunning } from "react-icons/fa";

const sportsPrograms = [
  {
    title: "Team Sports",
    icon: <Trophy className="w-6 h-6" />,
    description: "Basketball, Football, Cricket, and more",
  },
  {
    title: "Athletics",
    icon: <FaRunning className="w-6 h-6" />,
    description: "Track and Field events for all ages",
  },

  {
    title: "Individual Sports",
    icon: <Bike className="w-6 h-6" />,
    description: "Tennis, Badminton, Table Tennis, and more",
  },
];

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
          Building character, teamwork, and physical fitness through competitive
          and recreational sports.
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
            src="/images/sports-hero.jpg"
            alt="Sports at Modern School"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <blockquote className="text-white text-2xl italic max-w-2xl text-center">
              "Sports do not build character. They reveal it."
              <footer className="mt-4 text-lg">- Heywood Broun</footer>
            </blockquote>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sportsPrograms.map((program, index) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  {program.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
