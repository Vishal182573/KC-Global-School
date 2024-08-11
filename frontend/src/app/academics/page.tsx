"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, Brain, CheckCircle } from "lucide-react";

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
            src="https://drive.google.com/uc?export=download&id=18XaJe-7INknqAnn_qqw6_huA8yjRG7Pz" // Replace with a valid image URL
            alt="Academics at KC Global School"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <blockquote className="text-white text-2xl italic max-w-2xl text-center">
              "We want that education by which character is formed, the strength of mind is increased, and the intellect is expanded, and by which one can stand on one's own feet."
              <footer className="mt-4 text-lg">- Vivekananda</footer>
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
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Our Academic Approach</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At KC Global School, our academic program is designed to provide a comprehensive and well-rounded education that prepares students for future success. We offer a diverse curriculum ensuring that students receive a holistic education.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our teachers employ a variety of teaching methods to cater to different learning styles, including interactive lessons, hands-on projects, and technology integration. We prioritize critical thinking, problem-solving, and creativity, encouraging students to think independently and express their ideas confidently.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Assessment and Support</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Assessment at KC Global School goes beyond traditional exams; we use continuous evaluation methods that provide a more accurate picture of each student's progress and development. We believe in fostering a love for learning, and our supportive environment helps students excel academically while developing essential life skills.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            In addition to our rigorous academic curriculum, we offer specialized programs and resources for students with different learning needs, ensuring that every student has the opportunity to succeed. At KC Global School, we are dedicated to nurturing intellectual curiosity and preparing our students for the challenges of the future.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-blue-50 rounded-xl p-8 mb-16"
      >
        <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Key Features of Our Academic Program</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Comprehensive curriculum",
            "Interactive learning methods",
            "Continuous assessment",
            "Specialized support programs",
            "Focus on critical thinking",
            "Technology integration"
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <span className="text-lg text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {academicPrograms.map((program, index) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  {program.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    {program.title}
                  </h3>
                  <p className="text-gray-700">{program.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}