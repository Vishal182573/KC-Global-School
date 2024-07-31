"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

interface Person {
  imageSrc: any;
  imageAlt: string;
  title: string;
  message: string;
  name: string;
  designation: string;
  reverse: boolean;
}

interface PeopleInfoProps {
  people: Person[];
}

export default function PeopleInfo({ people }: PeopleInfoProps) {
  return (
    <div className="my-20 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-red-600 mb-2">Messages</h1>
        <p className="text-lg text-gray-600">KC GLOBAL SCHOOL, NEW DELHI</p>
      </motion.div>

      {people.map((person, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Card className="flex flex-col md:flex-row p-6 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className={`w-full md:w-1/3 ${person.reverse ? 'md:order-2' : ''}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-96 w-full"
              >
                <Image
                  src={person.imageSrc}
                  alt={person.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
            </div>
            <div className={`w-full md:w-2/3 ${person.reverse ? 'md:pr-6 md:order-1' : 'md:pl-6'} mt-6 md:mt-0`}>
              <h2 className="text-3xl font-bold text-red-600 mb-4">{person.title}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{person.message}</p>
              <div className="border-l-4 border-red-600 pl-4">
                <p className="font-bold text-xl text-gray-800">{person.name}</p>
                <p className="text-gray-600">{person.designation}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
