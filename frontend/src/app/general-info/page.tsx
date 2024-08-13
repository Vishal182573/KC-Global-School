"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function GeneralInfo() {
  const infoItems = [
    { sl: 1, info: "NAME OF THE SCHOOL*", details: "KC GLOBAL SCHOOL" },
    { sl: 2, info: "AFFILIATION NO.", details: "GJHS-617" },
    {
      sl: 3,
      info: "COMPLETE ADDRESS WITH PIN CODE*",
      details: "N.S 28 DELTA 2, GREATER NOIDA, UTTAR PRADESH 201306",
    },
    { sl: 4, info: "PRINCIPAL NAME*", details: "Mrs. Rita Anand" },
    { sl: 5, info: "SCHOOL EMAIL ID*", details: "kcglobalschool@gmail.com " },
    {
      sl: 6,
      info: "CONTACT DETAILS (LANDLINE/MOBILE)*",
      details: "9871347339",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 max-w-7xl"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl font-bold mb-12 text-center text-blue-600"
      >
        General Information
      </motion.h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>SL No.</TableHead>
            <TableHead>INFORMATION</TableHead>
            <TableHead>DETAILS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {infoItems.map((item) => (
            <TableRow key={item.sl}>
              <TableCell>{item.sl}</TableCell>
              <TableCell>{item.info}</TableCell>
              <TableCell>{item.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}
