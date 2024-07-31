"use client"

import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

interface GalleryItem {
  id: number;
  date: string;
  title: string;
  imageUrl: string;
}

const fetchGallery = async () => {
  // Replace with your API call
  return [
    { id: 1, date: "25 Feb 2024", title: "School Photographs", imageUrl: "https://via.placeholder.com/400x200" },
    { id: 2, date: "20 Feb 2024", title: "Sports Day Event", imageUrl: "https://via.placeholder.com/400x200" },
    { id: 3, date: "15 Feb 2024", title: "Art Exhibition", imageUrl: "https://via.placeholder.com/400x200" },
    { id: 4, date: "10 Feb 2024", title: "Science Fair", imageUrl: "https://via.placeholder.com/400x200" },
    { id: 5, date: "5 Feb 2024", title: "Annual Day Celebration", imageUrl: "https://via.placeholder.com/400x200" },
    { id: 6, date: "1 Feb 2024", title: "Cultural Fest", imageUrl: "https://via.placeholder.com/400x200" },
    { id: 7, date: "28 Jan 2024", title: "Graduation Ceremony", imageUrl: "https://via.placeholder.com/400x200" },
  ];
};

const Gallery: React.FC = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const getGallery = async () => {
      const data = await fetchGallery();
      setGallery(data);
    };

    getGallery();
  }, []);

  const handleViewGallery = () => {
    // Implement your view gallery functionality here
    console.log("View full gallery");
  };

  return (
    <Card className=" h-96 overflow-y-auto bg-gradient-to-b from-blue-50 to-white shadow-xl">
      <div className="flex justify-between items-center mb-4 sticky top-0 bg-white bg-opacity-90 p-2 z-10">
        <h2 className="text-2xl font-bold text-blue-700">Photo Gallery</h2>
        <Button 
          onClick={handleViewGallery}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          View All <Eye className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <ul className="space-y-4 px-3">
        {gallery.map((item) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-center p-2">
              <div className="relative w-24 h-24 mr-4">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                onClick={() => console.log(`View ${item.title}`)}
              >
                <Eye size={20} />
              </Button>
            </div>
          </motion.li>
        ))}
      </ul>
    </Card>
  );
};

export default Gallery;