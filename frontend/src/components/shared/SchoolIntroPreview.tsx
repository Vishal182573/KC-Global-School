"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SCHOOLIMAGE } from "../../../public";

export default function SchoolIntroduction() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 sm:py-16"
    >
      <Card className="p-4 sm:p-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-sm font-semibold text-blue-600 mb-2">
              INTRODUCTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              KC GLOBAL SCHOOL
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              KC Global School is a premier educational institute committed to
              nurturing global citizens and future leaders. With a focus on
              holistic development, we provide a world-class education that
              blends academic excellence with character building and cultural
              awareness.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Our state-of-the-art facilities, experienced faculties, and
              innovative curriculum create an environment where students can
              explore their potential and develop skills for the 21st century.
            </p>
            <Link href={"/about-us"}>
              <Button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative h-48 sm:h-64 lg:h-full rounded-lg overflow-hidden">
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
      </Card>
    </motion.div>
  );
}