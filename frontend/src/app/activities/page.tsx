"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  BookOpen,
  Trophy,
  Palette,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    title: "ACADEMICS",
    description: "Fostering intellectual growth and academic excellence.",
    image: "/images/academics.jpg",
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
    image: "/images/sports.jpg",
    link: "/sports",
    icon: <Trophy className="w-10 h-10 text-yellow-500" />,
    activities: ["Cricket Team", "Basketball Club", "Swimming", "Athletics"],
  },
  {
    title: "CO-CURRICULAR",
    description: "Nurturing creativity and personal development.",
    image: "/images/co-curricular.jpg",
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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white h-full"
              onClick={() =>
                setActiveCategory(
                  activeCategory === category.title ? null : category.title
                )
              }
            >
              <div className="relative">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-white">
                    {category.title}
                  </h2>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <p className="ml-3 text-xl font-semibold text-gray-700">
                    {category.description}
                  </p>
                </div>
                <AnimatePresence>
                  {activeCategory === category.title && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2 mb-4"
                    >
                      {category.activities.map((activity, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center text-gray-600 text-lg"
                        >
                          <Sparkles className="w-6 h-6 mr-2 text-blue-500" />
                          {activity}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
                <Link href={category.link}>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xl py-4">
                    Explore {category.title}
                    <ChevronRight className="ml-2 w-6 h-6" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
