"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Camera } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface GalleryItem {
  id: number;
  date: string;
  title: string;
  imageUrl: string;
}

const fetchGallery = async () => {
  // api call
  const response = await fetch("/api/gallery");
  return response.json();
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
    <Card className="h-96 overflow-y-auto bg-gradient-to-b from-blue-50 to-white shadow-xl">
      <CardHeader className="sticky top-0 bg-white bg-opacity-90 z-10">
        <CardTitle className="text-2xl font-bold text-blue-700 flex items-center">
          <Camera className="mr-2" />
          Photo Gallery
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AnimatePresence>
          {gallery.slice(0, 10).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <Card className="bg-white hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center">
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
                      <h3 className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                          onClick={() => setSelectedImage(item)}
                        >
                          <Eye size={20} />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        {selectedImage && (
                          <div className="relative w-full h-[60vh]">
                            <Image
                              src={selectedImage.imageUrl}
                              alt={selectedImage.title}
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default Gallery;
