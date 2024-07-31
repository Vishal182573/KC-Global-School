"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "MR. KAPIL SHARMA",
    role: "Parent",
    image: "https://via.placeholder.com/400x400",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo alias perspiciatis molestiae suscipit!",
  },
  {
    id: 2,
    name: "MR. SANJAY SINGH",
    role: "Parent",
    image: "https://via.placeholder.com/400x400",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo alias perspiciatis molestiae suscipit!",
  },
];

export default function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16 mt-2 container mx-auto px-4 py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">What Our Parents Say</h1>
        <p className="text-xl text-gray-600">
          We are committed to making a world-class education affordable.
        </p>
      </div>
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
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="p-4">
              <div className="bg-white rounded-xl shadow-lg p-8 relative">
                <FaQuoteLeft className="text-4xl text-blue-500 opacity-20 absolute top-4 left-4" />
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.section>
  );
}