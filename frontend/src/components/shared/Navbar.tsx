"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { Home, Info, Newspaper, Building, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      id: "home",
      icon: <Home size={18} />,
      subItems: [
        { name: "General Info", link: "/general-info" },
        { name: "School Calendar", link: "/calendar" },
        { name: "News & Events", link: "/news-events" },
      ],
    },
    {
      name: "About School",
      id: "about-school",
      icon: <Info size={18} />,
      subItems: [
        { name: "About Us", link: "/about-us" },
        { name: "History", link: "/about/history" },
        { name: "Vision & Mission", link: "/about/mission" },
      ],
    },
    {
      name: "Facilities",
      id: "facilities",
      icon: <Building size={18} />,
      link: "/facilities",
    },
    {
      name: "Messages",
      id: "messages",
      icon: <Mail size={18} />,
      link: "/messages",
    },
    {
      name: "Contact Us",
      id: "contact-us",
      icon: <Phone size={18} />,
      link: "/contact-us",
    },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg p-4 w-full flex justify-between items-center sticky top-0 z-50"
    >
      <div className="flex items-center space-x-4">
        <Image
          src="https://res.cloudinary.com/drwyju0q7/image/upload/v1720618171/uploads/yilkao7usha76fkrmwvy.png"
          alt="KC Global School Logo"
          width={60}
          height={60}
          className="rounded-full shadow-md"
        />
        <h1 className="text-2xl font-bold text-gray-800">KC GLOBAL SCHOOL</h1>
      </div>
      <nav className="hidden lg:flex space-x-2">
        {navItems.map((item) =>
          item.subItems ? (
            <DropdownMenu key={item.id}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 flex items-center"
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                  <ChevronDown size={16} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white rounded-md shadow-lg">
                {item.subItems.map((subItem) => (
                  <DropdownMenuItem key={subItem.name} className="p-0">
                    <Link
                      href={subItem.link}
                      className="w-full hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 p-3 block"
                    >
                      {subItem.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link key={item.id} href={item.link}>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 flex items-center"
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Button>
            </Link>
          )
        )}
      </nav>
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {navItems.map((item) => (
              <DropdownMenuItem key={item.id} className="p-0">
                {item.subItems ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center w-full p-3">
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                      <ChevronDown size={16} className="ml-auto" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.subItems.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} className="p-0">
                          <Link
                            href={subItem.link}
                            className="w-full p-3 block"
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.link}
                    className="flex items-center w-full p-3"
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </Link>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.header>
  );
}
