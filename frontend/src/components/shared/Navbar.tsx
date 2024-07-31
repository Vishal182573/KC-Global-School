"use client"

import React from "react";
import { motion } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { name: "Home", id: "Home" ,link:"/"},
    {
      name: "About School",
      id: "About-School",
      subItems: [
        { name: "About School", link: "/about/history" },
        { name: "Vision & Mission", link: "/about/mission" },
        { name: "Messages", link: "/about/vision" },
      ]
    },
    { name: "Facilities", id: "facilities",link:"/facilities"},
    { name: "Gallery", id: "Gallery",link:"/gallery"},
    { name: "Contact Us", id: "Contact-Us",link:"/contactUs"},
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg p-4 w-full flex justify-between items-center sticky top-0 "
    >
      <div className="flex items-center space-x-4">
        <Image src="https://res.cloudinary.com/drwyju0q7/image/upload/v1720618171/uploads/yilkao7usha76fkrmwvy.png" alt="app-logo" width={60} height={60} className="rounded-full shadow-md"/>
        <h1 className="text-2xl font-bold text-gray-800">KC GLOBAL SCHOOL</h1>
      </div>

      <nav className="hidden lg:flex space-x-4">
        {navItems.map((item) => (
          item.subItems ? (
            <DropdownMenu key={item.id}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-700 hover:text-blue-600 transition-colors">
                  {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {item.subItems.map((subItem) => (
                  <DropdownMenuItem key={subItem.name}>
                    <Link href={subItem.link} className="w-full hover:text-blue-600 transition-colors p-2">
                      {subItem.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              key={item.id}
              variant="ghost"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Link href={item.link}>
              {item.name}
              </Link>
            </Button>
          )
        ))}
      </nav>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 h-screen space-y-5">
          {navItems.map((item) => (
            item.subItems ? (
              <DropdownMenuSub key={item.id}>
                <DropdownMenuSubTrigger>{item.name}</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem key={subItem.name}>
                      <Link href={subItem.link} className="w-full hover:text-blue-600 transition-colors p-4">
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuItem key={item.id}>
                <Link href={item.link} className="w-full hover:text-blue-600 transition-colors p-4">
                  {item.name}
                </Link>
              </DropdownMenuItem>
            )
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.header>
  );
}