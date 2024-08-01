"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, Brain } from "lucide-react";

const academicPrograms = [
  {
    title: "Primary Education",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Strong foundation in core subjects",
  },
  {
    title: "Secondary Education",
    icon: <GraduationCap className="w-6 h-6" />,
    description: "Comprehensive curriculum for holistic development",
  },
  {
    title: "Specialized Courses",
    icon: <Brain className="w-6 h-6" />,
    description: "Advanced topics for in-depth learning",
  },
  {
    title: "Collaborative Learning",
    icon: <Users className="w-6 h-6" />,
    description: "Group projects and peer-to-peer education",
  },
];

export default function Academics() {
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
        <h1 className="text-5xl font-bold mb-4 text-blue-600">Academics</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering minds through innovative and comprehensive education.
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
            src="/images/academics-hero.jpg"
            alt="Academics at Modern School"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <blockquote className="text-white text-2xl italic max-w-2xl text-center">
              "The function of education is to teach one to think intensively
              and to think critically. Intelligence plus character - that is the
              goal of true education."
              <footer className="mt-4 text-lg">- Martin Luther King Jr.</footer>
            </blockquote>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {academicPrograms.map((program, index) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
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
