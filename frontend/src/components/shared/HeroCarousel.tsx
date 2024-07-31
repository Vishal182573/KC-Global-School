"use client"

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import {motion} from "framer-motion"



interface HeroCarouselProps {
  images: string[];
}

export function HeroCarousel({ images }: HeroCarouselProps) {
    const router = useRouter();
  const handleclick = ()=>{
    alert("Hello");
  }
  return (
    <motion.section 
         initial={{ opacity: 0, x: -50}}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    className="mb-16 mt-2">
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
        className="overflow-hidden shadow-2xl"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative">
              <Image
                alt={image}
                src={image}
                width={1200}
                height={600}
                className="object-cover w-full h-[80vh]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-white text-center">
                  <h2 className="text-4xl font-bold mb-4">Welcome to KC GLOBAL SCHOOL</h2>
                  <p className="text-xl mb-6">School was established in 2015, is a Co-ed school affiliated to Central Board of Secondary Education (CBSE). </p>
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300" onClick={handleclick}>
                    Know More About Us
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </motion.section>
  );
}