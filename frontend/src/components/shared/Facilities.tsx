"use client";
import React from "react";
import { Card } from "../ui/card";

interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Computer Lab",
    subtitle: "Modern Tech",
    description: "Equipped with the latest technology for students.",
    imageUrl: "https://via.placeholder.com/400x200",
  },
  {
    id: 2,
    title: "Science Lab",
    subtitle: "Experiments",
    description: "A place to explore scientific principles.",
    imageUrl: "https://via.placeholder.com/400x200",
  },
  {
    id: 3,
    title: "Library",
    subtitle: "Knowledge Hub",
    description: "A vast collection of books for students.",
    imageUrl: "https://via.placeholder.com/400x200",
  },
  {
    id: 4,
    title: "Library",
    subtitle: "Knowledge Hub",
    description: "A vast collection of books for students.",
    imageUrl: "https://via.placeholder.com/400x200",
  },
  {
    id: 5,
    title: "Library",
    subtitle: "Knowledge Hub",
    description: "A vast collection of books for students.",
    imageUrl: "https://via.placeholder.com/400x200",
  },
];

export default function Facilities() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-purple-500">Facilities</h1>
      <h2 className="text-xl mb-4">KC GLOBAL SCHOOL</h2>
      <p className="mb-8">
        The school campus is super modern, with lots of space, safety, and
        nature-friendly features that make students really enjoy being there.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <Card key={item.id} className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <h4 className="text-md text-gray-500">{item.subtitle}</h4>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

