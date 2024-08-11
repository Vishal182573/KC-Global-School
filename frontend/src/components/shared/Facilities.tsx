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
  Music,
  PlayCircle
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
    title: "Classroom",
    subtitle: "Modern Tech",
    description: "Equipped with the latest technology for students.",
    imageUrl: "https://drive.google.com/uc?export=download&id=18XaJe-7INknqAnn_qqw6_huA8yjRG7Pz",
    icon: <Computer className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Music Class",
    subtitle: "Musical Creativity",
    description: "A place to explore musical talents and creativity.",
    imageUrl: "https://drive.google.com/uc?export=download&id=18oePg4kNdjtD1NAamHJAiSShoG6Df_eb",
    icon: <Music className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Computer Lab",
    subtitle: "Knowledge Hub",
    description: "A place to enhance computing skills.",
    imageUrl: "https://drive.google.com/uc?export=download&id=18g4J63kZ_KSR4rRqaHw5H6KG2wWt6w8n",
    icon: <Computer className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Library",
    subtitle: "Knowledge Hub",
    description: "A vast collection of books for students.",
    imageUrl: "https://drive.google.com/uc?export=download&id=18gg_ddy9wh5WutASX9SVkMo-9xWzIFgG",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    id: 5,
    title: "Activity Room",
    subtitle: "Events & Performances",
    description: "A spacious venue for school events and performances.",
    imageUrl: "https://drive.google.com/uc?export=download&id=18l39iTY23upmFW3iM9Afd9v-7CUXpMRA",
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
        <h2 className="text-4xl font-bold mb-2 text-purple-600">KC GLOBAL SCHOOL</h2>
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
