"use client";

import { motion } from "framer-motion";
import { HeroCarousel } from "@/components/shared/HeroCarousel";
import SchoolIntroduction from "@/components/shared/SchoolIntroPreview";
import PeopleInfo from "@/components/shared/PeopleInfo";
import Notifications from "@/components/shared/Notifications";
import Gallery from "@/components/shared/Gallery";
import Testimonials from "@/components/shared/Testimonials";
import { Separator } from "@/components/ui/separator";
import Activities from "@/components/shared/Activities";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/lib/constant";
import SchoolFacilities from "@/components/shared/home_grid";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

interface coursorelProps{
  image:string,
  _id:string,
}
const fetchCoursorel = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/coursorels`);
    return response.data;
  } catch (error) {
    console.error('Error fetching galleries:', error);
  }
};
export default function Home() {
  const [images,setImages] = useState <coursorelProps[]> ([]);

  useEffect(() => {
    const getCoursorel = async () => {
      const data = await fetchCoursorel();
      setImages(data);
    };
    getCoursorel();
  }, []);
  return (
    <div className="w-full overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section {...fadeInUp} className="mb-16">
          <HeroCarousel
            images={images}
          />
        </motion.section>

        <motion.section {...fadeInUp} className="mb-16">
          <SchoolIntroduction />
        </motion.section>

        <Separator className="my-16" />

        <motion.section {...fadeInUp} className="mb-16">
          <PeopleInfo />
        </motion.section>

        <Activities />

        <Separator className="my-16" />

        <motion.section {...fadeInUp} className="mb-16">
          <SchoolFacilities/>
        </motion.section>
        
        <Separator className="my-16" />

        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            School Updates
          </h2>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            <Notifications />
            <Gallery />
            {/* <VideoPreview /> */}
          </div>
        </motion.section>

        <Separator className="my-16" />

        <motion.section {...fadeInUp} className="mb-16">
          <Testimonials />
        </motion.section>

      </main>
    </div>
  );
}
