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
import VideoPreview from "@/components/shared/Video";
import { BANNER } from "../../public";
import Image from "next/image";

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
        <motion.section {...fadeInUp} >
          <HeroCarousel
            images={images}
          />
        </motion.section>

        <Separator className="my-8" />
        <motion.section {...fadeInUp}>
        <VideoPreview />
        </motion.section>
        <Separator className="my-8" />

        <motion.section {...fadeInUp} >
          <SchoolIntroduction />
        </motion.section>

        <Separator className="my-8" />

        <motion.section {...fadeInUp}>
          <PeopleInfo />
        </motion.section>

        <Separator className="my-8" />

        <motion.section {...fadeInUp}>
          <Activities />
        </motion.section>

        <Separator className="my-8" />

        <motion.section {...fadeInUp} >
          <SchoolFacilities/>
        </motion.section>
        
        <Separator className="my-8" />

        <motion.section {...fadeInUp}>
      <div className="relative mb-5  rounded-lg">
        <div className="absolute inset-0  rounded-lg">
          <Image
            src={BANNER} 
            alt="Banner"
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
          <h2 className="text-3xl font-bold text-white text-center">
            School Updates
          </h2>
        </div>
      </div>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
        <Notifications />
        <Gallery />
      </div>
    </motion.section>

        <Separator className="my-8" />


        <motion.section {...fadeInUp} >
          <Testimonials />
        </motion.section>

      </main>
    </div>
  );
}
