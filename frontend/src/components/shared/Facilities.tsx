"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Computer,
  FlaskConical,
  BookOpen,
  Building,
  Shapes,
} from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Computer Lab",
    subtitle: "Modern Tech",
    description: "Equipped with the latest technology for students.",
    imageUrl: "https://via.placeholder.com/400x200",
    icon: <Computer className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Science Lab",
    subtitle: "Experiments",
    description: "A place to explore scientific principles.",
    imageUrl: "https://via.placeholder.com/400x200",
    icon: <FlaskConical className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Library",
    subtitle: "Knowledge Hub",
    description: "A vast collection of books for students.",
    imageUrl: "https://via.placeholder.com/400x200",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Sports Complex",
    subtitle: "Physical Education",
    description: "State-of-the-art facilities for various sports.",
    imageUrl: "https://via.placeholder.com/400x200",
    icon: <Shapes className="h-6 w-6" />,
  },
  {
    id: 5,
    title: "Auditorium",
    subtitle: "Events & Performances",
    description: "A spacious venue for school events and performances.",
    imageUrl: "https://via.placeholder.com/400x200",
    icon: <Building className="h-6 w-6" />,
  },
];

export default function Facilities() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-2 text-purple-600">
          Our Facilities
        </h1>
        <h2 className="text-2xl mb-4 text-gray-700">KC GLOBAL SCHOOL</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our school campus boasts modern amenities, spacious environments, and
          eco-friendly features that create an inspiring atmosphere for our
          students.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="flex flex-row items-center space-x-2">
                {item.icon}
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="text-md text-gray-500 mb-2">{item.subtitle}</h4>
                <p className="text-gray-700">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
