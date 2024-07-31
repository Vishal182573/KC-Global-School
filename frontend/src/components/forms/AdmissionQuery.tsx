"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { Card } from "../ui/card";
import { Button} from "../ui/button";
import { Input} from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoClose, IoChatbubbleEllipsesOutline } from "react-icons/io5";

const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  gender: z.string().min(1, "Gender is required"),
  admissionClass: z.string().min(1, "Class is required"),
  currentSchool: z.string().min(1, "Current School Name is required"),
  fatherName: z.string().min(1, "Father Name is required"),
  motherName: z.string().min(1, "Mother Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone Number is required"),
  address: z.string().min(1, "Address is required"),
});

type FormData = z.infer<typeof schema>;

export default function AdmissionForm() {
  const [isOpen, setIsOpen] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Handle form submission
    console.log(data);
  };


  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50"
        >
          <Card className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
            <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2">
              <IoClose className="w-6 h-6 text-gray-700" />
            </button>
            <h2 className="mb-4 text-xl font-bold text-center text-red-600">Apply for Admission (2024-2025)</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input {...register("fullName")} placeholder="Full Name of Child*" error={errors.fullName?.message} />
                </div>
                <div>
                  <Input {...register("gender")} placeholder="Gender*" error={errors.gender?.message} />
                </div>
                <div>
                  <Input {...register("admissionClass")} placeholder="Seeking Admission in Class*" error={errors.admissionClass?.message} />
                </div>
                <div>
                  <Input {...register("currentSchool")} placeholder="Current School Name*" error={errors.currentSchool?.message} />
                </div>
                <div>
                  <Input {...register("fatherName")} placeholder="Father Name*" error={errors.fatherName?.message} />
                </div>
                <div>
                  <Input {...register("motherName")} placeholder="Mother Name*" error={errors.motherName?.message} />
                </div>
                <div>
                  <Input {...register("email")} placeholder="Email Id*" error={errors.email?.message} />
                </div>
                <div>
                  <Input {...register("phoneNumber")} placeholder="Phone Number*" error={errors.phoneNumber?.message} />
                </div>
                <div className="col-span-2">
                  <Input {...register("address")} placeholder="Complete Address" error={errors.address?.message} />
                </div>
              </div>
              <Button type="submit" className="w-full mt-4 bg-red-600">Submit</Button>
            </form>
          </Card>
        </motion.div>
      )}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-3 bg-red-600 rounded-full shadow-lg z-50"
      >
        <IoChatbubbleEllipsesOutline className="w-6 h-6 text-white" />
      </button>
    </>
  );
}
