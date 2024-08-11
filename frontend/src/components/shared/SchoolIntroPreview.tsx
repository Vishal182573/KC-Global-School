"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SCHOOLIMAGE } from "../../../public";

export default function SchoolIntroduction() {
  const stats = [
    { icon: <GraduationCap size={24} />, label: "Students", value: "100+" },
    { icon: <Users size={24} />, label: "Faculty", value: "30+" },
    { icon: <Globe size={24} />, label: "Global Partners", value: "5+" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <Card className="p-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-sm font-semibold text-blue-600 mb-2">
              Introduction
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              KC GLOBAL School
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              KC GLOBAL School is a premier educational institution committed to
              nurturing global citizens and future leaders. With a focus on
              holistic development, we provide a world-class education that
              blends academic excellence with character building and cultural
              awareness.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our state-of-the-art facilities, experienced faculty, and
              innovative curriculum create an environment where students can
              explore their potential and develop skills for the 21st century.
            </p>
            <Link href={"/about-us"}>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors" >
              Learn More <ArrowRight size={16} className="ml-2" />
            </Button>
            </Link>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative h-64 lg:h-full rounded-lg overflow-hidden">
              <Image
                src={SCHOOLIMAGE}
                alt="KC Global School Building"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Card>
    </motion.div>
  );
}
