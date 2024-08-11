"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Camera, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import axios from "axios";
import { BACKEND_URL } from "@/lib/constant";

interface GalleryItem {
  id: number;
  date: string;
  title: string;
  images: string[];
}

const fetchGallery = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/galleries`);
    return response.data;
  } catch (error) {
    console.error('Error fetching galleries:', error);
  }
};

const Gallery: React.FC = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const getGallery = async () => {
      const data = await fetchGallery();
      setGallery(data);
    };
    getGallery();
  }, []);

  return (
    <Card className="h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-b from-blue-50 to-white shadow-2xl rounded-xl">
      <CardHeader className="sticky top-0 bg-white bg-opacity-90 z-10 border-b border-blue-100">
        <CardTitle className="text-3xl font-bold text-blue-700 flex items-center">
          <Camera className="mr-3 h-8 w-8" />
          Photo Gallery
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-y-auto h-full pb-12">
        <AnimatePresence>
          {gallery.length > 0 ? (
            gallery.slice(0, 10).map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <Card className="bg-white hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row items-center">
                      <div className="relative w-full sm:w-32 h-32 mb-4 sm:mb-0 sm:mr-6">
                        <Image
                          src={item.images[0]}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="flex-grow text-center sm:text-left">
                        <h3 className="font-semibold text-xl text-blue-800 hover:text-blue-600 transition-colors mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 flex items-center justify-center sm:justify-start mb-4">
                          <Calendar className="mr-1 h-4 w-4" />
                          {item.date}
                        </p>
                        <Dialog>
  <DialogTrigger asChild>
    <Button
      variant="outline"
      size="sm"
      className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 border-blue-300"
      onClick={() => setSelectedImage(item)}
    >
      <Eye size={16} className="mr-2" />
      View Gallery
    </Button>
  </DialogTrigger>
  <DialogContent className="w-screen h-screen p-4 overflow-y-auto">
    {selectedImage && (
      <div>
        <h2 className="text-2xl font-bold text-blue-800 mb-4">{selectedImage.title}</h2>
        <div className="grid grid-cols-1 gap-4">
          {item.images.map((image, index) => (
            <div key={index} className="relative pt-[75%] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`${selectedImage.title} - Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    )}
  </DialogContent>
</Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center h-full text-gray-500"
            >
              <Camera className="h-16 w-16 mb-4 text-blue-300" />
              <p className="text-lg">No galleries available</p>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default Gallery;