"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { CHAIRMEN } from "../../../public";


export default function PeopleInfo() {
  const people = [
    {
      imageSrc: CHAIRMEN,
      imageAlt: "Chairperson",
      title: "Chairperson Message",
      message:
        "Welcome to KC Global School! As Chairperson, I am committed to fostering an environment where excellence, innovation, and holistic development thrive. Our goal is to empower every student with knowledge, values, and skills for a bright future. We strive to create a nurturing atmosphere that encourages curiosity and creativity. Together, let's embark on this journey of learning, growth, and success. Thank you for being a part of our KC Global School family",
      name: "Mr. Shivam Jindal",
      designation: "Chairperson, KC Global School",
      reverse: false,
    },
    {
      imageSrc: "https://drive.google.com/uc?export=download&id=18u9j5QSRB9-P0zONh1PmHRS7QkSI0XM0",
      imageAlt: "Principal",
      title: "Principal Message",
      message:
        "Welcome to KC Global School! As the Principal, I am dedicated to guiding our students toward academic excellence and personal growth. Our school is a place where every child is encouraged to explore, learn, and thrive in a supportive environment. We emphasize not just academic achievements but also the development of character, leadership, and compassion. Together, we will build a strong foundation for a successful and fulfilling future",
      name: "Mrs. Rita Anand",
      designation: "Principal, KC Global School",
      reverse: true,
    },
  ];
  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          School Leadership
        </h2>
        <p className="text-xl text-gray-600">
          Guiding our institute towards excellence
        </p>
      </motion.div>
      {people.map((person, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="flex flex-col lg:flex-row p-8 bg-white shadow-xl rounded-lg overflow-hidden">
            <motion.div
              className={`w-full lg:w-1/3 ${
                person.reverse ? "lg:order-2" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src={person.imageSrc}
                  alt={person.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </motion.div>
            <div
              className={`w-full lg:w-2/3 ${
                person.reverse ? "lg:pr-12 lg:order-1" : "lg:pl-12"
              } mt-8 lg:mt-0`}
            >
              <motion.div
                initial={{ opacity: 0, x: person.reverse ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {person.title}
                </h3>
                <div className="relative">
                  <Quote
                    size={48}
                    className="absolute -top-4 -left-6 text-gray-200"
                  />
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg italic relative z-10">
                    {person.message}
                  </p>
                </div>
                <motion.div
                  className="border-l-4 border-blue-600 pl-6 py-2"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <p className="font-bold text-2xl text-gray-800">
                    {person.name}
                  </p>
                  <p className="text-gray-600 text-lg">{person.designation}</p>
                </motion.div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
