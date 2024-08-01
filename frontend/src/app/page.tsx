"use client";

import { motion } from "framer-motion";
import { HeroCarousel } from "@/components/shared/HeroCarousel";
import { CHAIRMEN } from "../../public";
import SchoolIntroduction from "@/components/shared/SchoolIntroPreview";
import PeopleInfo from "@/components/shared/PeopleInfo";
import Notifications from "@/components/shared/Notifications";
import Gallery from "@/components/shared/Gallery";
import VideoPreview from "@/components/shared/Video";
import Testimonials from "@/components/shared/Testimonials";
import { Separator } from "@/components/ui/separator";
import Activities from "./activities/page";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {
  const people = [
    {
      imageSrc: CHAIRMEN,
      imageAlt: "Chairman",
      title: "Chairman Message",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptate nisi ab quae nemo exercitationem. Fugit maxime officiis cumque consectetur laudantium praesentium? Inventore assumenda possimus in minima omnis, numquam dolorum ipsa! Consequatur voluptates doloremque error facilis ex tempore! Autem sed nostrum officiis quia alias, minima praesentium possimus quam natus, cupiditate iste et impedit laboriosam suscipit, provident placeat at voluptatem recusandae! Repellat cupiditate iure dolorum nulla quae assumenda autem, molestiae nemo harum nam! Similique, animi blanditiis quod laborum optio earum beatae.",
      name: "Mr. Ram Kumar Mavi",
      designation: "Chairman, Gyan Jyoti Public School",
      reverse: false,
    },
    {
      imageSrc: CHAIRMEN,
      imageAlt: "Principal",
      title: "Principal Message",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odio esse harum ad dolore ea fugit rerum ducimus perspiciatis dolorem, itaque architecto, veniam ipsa tenetur ut. Delectus eum optio vero eius dolor rerum ullam, reprehenderit explicabo? Temporibus nam a eius dignissimos impedit, at molestias. Saepe voluptatibus quam reprehenderit ab soluta itaque inventore minus iste atque aut delectus odit suscipit possimus corporis pariatur in aspernatur, asperiores vel. Expedita perferendis ipsa, recusandae praesentium voluptates quam molestias debitis tempora alias. Odit, adipisci dicta.",
      name: "Ms. Priya Sharma",
      designation: "Principal, Gyan Jyoti Public School",
      reverse: true,
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section {...fadeInUp} className="mb-16">
          <HeroCarousel
            images={[
              "https://via.placeholder.com/1200x400",
              "https://via.placeholder.com/1200x400",
              "https://via.placeholder.com/1200x400",
            ]}
          />
        </motion.section>

        <motion.section {...fadeInUp} className="mb-16">
          <SchoolIntroduction />
        </motion.section>

        <Separator className="my-16" />

        <motion.section {...fadeInUp} className="mb-16">
          <PeopleInfo people={people} />
        </motion.section>

        <Activities />

        <Separator className="my-16" />

        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            School Updates
          </h2>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
            <Notifications />
            <Gallery />
            <VideoPreview />
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
