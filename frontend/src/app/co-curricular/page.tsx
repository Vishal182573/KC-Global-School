"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Palette, Film, Cpu } from "lucide-react";

const coActivities = [
  {
    title: "Performing Arts",
    icon: <Music className="w-6 h-6" />,
    description: "Music, Dance, and Theater programs",
  },
  {
    title: "Visual Arts",
    icon: <Palette className="w-6 h-6" />,
    description: "Painting, Sculpture, and Digital Art workshops",
  },
  {
    title: "Media & Communication",
    icon: <Film className="w-6 h-6" />,
    description: "Journalism, Photography, and Video Production",
  },
  {
    title: "STEM Clubs",
    icon: <Cpu className="w-6 h-6" />,
    description: "Robotics, Coding, and Science Experiments",
  },
];

export default function CoCurricular() {
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
        <h1 className="text-5xl font-bold mb-4 text-purple-600">
          Co-Curricular Activities
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nurturing creativity, enhancing skills, and fostering personal growth
          beyond the classroom.
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
            src="/images/co-curricular-hero.jpg"
            alt="Co-Curricular Activities at Modern School"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <blockquote className="text-white text-2xl italic max-w-2xl text-center">
              "Creativity is intelligence having fun."
              <footer className="mt-4 text-lg">- Albert Einstein</footer>
            </blockquote>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coActivities.map((activity, index) => (
          <motion.div
            key={activity.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  {activity.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
