"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Trophy, Palette, Sparkles } from "lucide-react";
import { ACADEMICS, COCURICULLAR, SPORTS } from "../../../public";

const categories = [
  {
    title: "ACADEMICS",
    description: "Fostering intellectual growth and academic excellence.",
    image: "https://drive.google.com/uc?export=download&id=1WGtEZlsP5wN62mVQoKxGDUx5JweaqWdk",
    link: "/academics",
    icon: <BookOpen className="w-10 h-10 text-blue-500" />,
    activities: [
      "Debate Club",
      "Science Olympiad",
      "Math League",
      "Language Lab",
    ],
  },
  {
    title: "SPORTS",
    description: "Promoting physical fitness and sportsmanship.",
    image: "https://drive.google.com/uc?export=download&id=1YG8pZUZRaH_HkJF8HhtQB2e_dY1LVP0h",
    link: "/sports",
    icon: <Trophy className="w-10 h-10 text-yellow-500" />,
    activities: ["Cricket Team", "Basketball Club", "Swimming", "Athletics"],
  },
  {
    title: "CO-CURRICULAR",
    description: "Nurturing creativity and personal development.",
    image: "https://drive.google.com/uc?export=download&id=10Dcj-cp7q14ATYLSGZiY3eJ4ddgys1hL",
    link: "/co-curricular",
    icon: <Palette className="w-10 h-10 text-purple-500" />,
    activities: [
      "Drama Club",
      "Music Ensemble",
      "Art Workshop",
      "Robotics Club",
    ],
  },
];

export default function Activities() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 max-w-7xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold mb-6 text-blue-600">
          Discover Your Passion
        </h1>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
          Explore a world of opportunities at KC Global School. Unleash your
          potential through our diverse range of activities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative"
          >
            <Link href={category.link} className="block h-full">
              <Card className="overflow-hidden transition-transform duration-300 cursor-pointer bg-white group-hover:shadow-2xl relative group-hover:bg-opacity-70 ">
                <div className="relative h-[80vh]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="text-4xl font-bold text-white">
                      {category.title}
                    </h2>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
