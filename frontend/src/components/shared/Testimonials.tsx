"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { PARENT1, PARENT2 } from "../../../public";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: any;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "MR. KAPIL SHARMA",
    role: "Parent",
    image: PARENT1,
    text: "As a parent, I have seen remarkable growth in my child since joining this school. The nurturing environment and dedicated teachers have made all the difference.",
  },
  {
    id: 2,
    name: "MR. PRIYA SINGH",
    role: "Parent",
    image: PARENT2,
    text: "I am truly impressed with the holistic approach to education at this school. My child is not only excelling academically but also developing important life skills.",
  },
  
];

export default function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16 mt-2 container mx-auto px-4 py-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl shadow-2xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          What Our Parents Say
        </h1>
        <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
          We are committed to making a world-class education affordable and accessible.
        </p>
      </motion.div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="overflow-hidden"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={testimonial.id} className="p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-8 md:p-12 relative">
                    <FaQuoteLeft className="text-6xl text-blue-500 opacity-10 absolute top-4 left-4" />
                    <p className="text-gray-700 text-xl md:text-2xl mb-8 italic relative z-10">
                      "{testimonial.text}"
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                      <div className="flex items-center mb-4 md:mb-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="w-24 h-24 rounded-full mr-6 object-cover border-4 border-blue-200"
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {testimonial.name}
                          </h3>
                          <p className="text-xl text-blue-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.section>
  );
}