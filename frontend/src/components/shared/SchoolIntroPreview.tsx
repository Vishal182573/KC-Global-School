"use client"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Button } from "../ui/button"

export default function SchoolIntroduction() {
  return (
    <motion.div
    //   initial={{ opacity: 0, y: 50 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-white shadow-md rounded-lg">
        <div className="text-md text-red-800 ">Introduction</div>
        <h2 className="text-3xl font-bold text-red-600">KC GLOBAL School</h2>
        <p className="mt-4 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iure non velit aliquam aliquid officia ipsam ex corporis accusantium culpa quasi, enim tenetur, ad sed! Nulla ab repudiandae eligendi sequi sapiente quod quae illo animi sed quis. Nesciunt labore corrupti reiciendis repudiandae ut laboriosam recusandae minima earum, nemo commodi eligendi odit enim. Adipisci, debitis suscipit. Necessitatibus ipsa dolorem natus numquam voluptates et unde ipsum soluta, totam dolore quaerat praesentium eum mollitia officia in. Voluptates provident ratione facilis illo libero fuga omnis saepe laudantium nisi nesciunt laboriosam at excepturi, quasi praesentium.
        </p>
        <Button className="mt-6 bg-red-600 text-white">Read More</Button>
      </Card>
    </motion.div>
  )
}
