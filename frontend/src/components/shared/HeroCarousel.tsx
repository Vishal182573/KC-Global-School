"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface HeroCarouselProps {
  images: string[];
}

export function HeroCarousel({ images }: HeroCarouselProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about-us");
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16 mt-2"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="overflow-hidden shadow-2xl rounded-xl"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative">
              <Image
                alt={`Slide ${index + 1}`}
                src={image}
                width={1200}
                height={600}
                className="object-cover w-full h-[80vh]"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
              >
                <div className="text-white text-center max-w-3xl px-4">
                  <h2 className="text-5xl font-bold mb-4">
                    Welcome to KC GLOBAL SCHOOL
                  </h2>
                  <p className="text-xl mb-6">
                    Established in 2015, we are a Co-ed school affiliated with
                    the Central Board of Secondary Education (CBSE).
                  </p>
                  <Button
                    onClick={handleClick}
                    size="lg"
                    className="bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition duration-300"
                  >
                    Know More About Us
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </motion.section>
  );
}
