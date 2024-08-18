"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  ChevronDown,
  GalleryVerticalIcon,
  Info,
  ChevronUp,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { Home, Building, Phone, Mail } from "lucide-react";
import { LOGO } from "../../../public";

export default function Navbar() {
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleDropdown = (id: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const closeAllDropdowns = () => {
    setOpenDropdowns({});
  };

  const navItems = [
    {
      name: "Home",
      id: "home",
      icon: <Home size={18} />,
      link: "/",
    },
    {
      name: "About Us",
      id: "about-us",
      icon: <Info size={18} />,
      subItems: [
        { name: "About Us", link: "/about-us" },
        { name: "General Info", link: "/general-info" },
        { name: "Messages", link: "/messages" },
        { name: "News & Events", link: "/news-events" },
      ],
    },
    {
      name: "Infrastructure",
      id: "facilities",
      icon: <Building size={18} />,
      link: "/facilities",
    },
    {
      name: "Admission",
      id: "admission",
      icon: <GraduationCap size={18} />,
      subItems: [
        { name: "Admission Process", link: "/admission" },
        { name: "Documents Required", link: "/documents" },
        { name: "Fee Structure", link: "/fee-structure" },
        { name: "Admission Form", link: "/admissionForm" },
      ],
    },
    {
      name: "Gallery",
      id: "gallery",
      icon: <GalleryVerticalIcon size={18} />,
      link: "/gallery",
    },
    {
      name: "Contact Us",
      id: "contact-us",
      icon: <Mail size={18} />,
      link: "/contact-us",
    },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg p-4 w-full flex justify-between items-center sticky top-0 z-50 h-16"
    >
      <Link href={"/"} onClick={closeAllDropdowns}>
      <div className="flex items-center space-x-4 cursor-pointer">
      <div className="relative h-24 w-24">
        <Image
          src={LOGO}
          alt="School-logo"
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
      <h1 className="text-2xl font-bold">KC GLOBAL SCHOOL</h1>
    </div>
      </Link>
      <nav className="hidden lg:flex space-x-2">
        {navItems.map((item) =>
          item.subItems ? (
            <DropdownMenu key={item.id} onOpenChange={() => toggleDropdown(item.id)}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className=" hover:bg-blue-50 transition-colors duration-300 flex items-center"
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={openDropdowns[item.id] ? "chevronUp" : "chevronDown"}
                      initial={{ rotate: 0 }}
                      animate={{ rotate: openDropdowns[item.id] ? 180 : 0 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} className="ml-1" />
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white rounded-md shadow-lg">
                {item.subItems.map((subItem) => (
                  <DropdownMenuItem
                    key={subItem.name}
                    className="p-0"
                    onSelect={closeAllDropdowns}
                  >
                    <Link
                      href={subItem.link}
                      className="w-full hover:bg-blue-50 transition-colors duration-300 p-3  flex items-center justify-between group"
                    >
                      <span>{subItem.name}</span>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100"
                        initial={{ rotate: -45, x: -5 }}
                        animate={{ rotate: 0, x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight size={16} />
                      </motion.div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link key={item.id} href={item.link} onClick={closeAllDropdowns}>
              <Button
                variant="ghost"
                className=" hover:bg-blue-50 transition-colors duration-300 flex items-center group"
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
          <DropdownMenuContent align="end" className="w-56 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            {navItems.map((item) => (
              <DropdownMenuItem
                key={item.id}
                className="p-0"
                onSelect={closeAllDropdowns}
              >
                {item.subItems ? (
                  <DropdownMenu onOpenChange={() => toggleDropdown(item.id)}>
                    <DropdownMenuTrigger className="flex items-center w-full p-3 justify-between">
                      <div className="flex items-center">
                        {item.icon}
                        <span className="ml-2">{item.name}</span>
                      </div>
                      <AnimatePresence initial={false} mode="wait">
                        <motion.div
                          key={openDropdowns[item.id] ? "chevronUp" : "chevronDown"}
                          initial={{ rotate: 0 }}
                          animate={{ rotate: openDropdowns[item.id] ? 180 : 0 }}
                          exit={{ rotate: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </AnimatePresence>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                      {item.subItems.map((subItem) => (
                        <DropdownMenuItem
                          key={subItem.name}
                          className="p-0"
                          onSelect={closeAllDropdowns}
                        >
                          <Link
                            href={subItem.link}
                            className="w-full p-3 flex items-center justify-between group"
                          >
                            <span>{subItem.name}</span>
                            <motion.div
                              className="opacity-0 group-hover:opacity-100"
                              initial={{ rotate: -45, x: -5 }}
                              animate={{ rotate: 0, x: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ArrowUpRight size={16} />
                            </motion.div>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.link}
                    className="flex items-center w-full p-3 justify-between group"
                  >
                    <div className="flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </div>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100"
                      initial={{ rotate: -45, x: -5 }}
                      animate={{ rotate: 0, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.div>
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
