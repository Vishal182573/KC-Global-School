"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  gender: z.string().min(1, "Gender is required"),
  admissionClass: z.string().min(1, "Class is required"),
  currentSchool: z.string().min(1, "Current School Name is required"),
  parentName: z.string().min(1, "Parent Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone Number is required"),
  address: z.string().min(1, "Address is required"),
});

type FormData = z.infer<typeof schema>;

export default function AdmissionPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    try {
      await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      toast({
        title: "Application Submitted",
        description:
          "Your admission application has been successfully submitted.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    }
  };

  const formFields = [
    { name: "fullName", placeholder: "Full Name of Child*", type: "input" },
    {
      name: "gender",
      placeholder: "Select Gender*",
      type: "select",
      options: ["male", "female", "other"],
    },
    {
      name: "admissionClass",
      placeholder: "Seeking Admission in Class*",
      type: "input",
    },
    {
      name: "currentSchool",
      placeholder: "Current School Name*",
      type: "input",
    },
    { name: "parentName", placeholder: "Parent Name*", type: "input" },
    { name: "email", placeholder: "Email Id*", type: "input" },
    { name: "phoneNumber", placeholder: "Phone Number*", type: "input" },
    { name: "address", placeholder: "Complete Address*", type: "textarea" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white relative overflow-hidden py-12 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-red-200 rounded-full opacity-20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="w-full shadow-2xl overflow-hidden">
          <CardHeader className="bg-red-600 text-white">
            <CardTitle className="text-2xl font-bold text-center">
              Apply for Admission (2024-2025)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {formFields
                    .slice(currentStep * 4, (currentStep + 1) * 4)
                    .map((field) => (
                      <div key={field.name}>
                        <Controller
                          name={field.name as keyof FormData}
                          control={control}
                          render={({ field: controllerField }) =>
                            field.type === "select" ? (
                              <Select
                                onValueChange={controllerField.onChange}
                                value={controllerField.value}
                              >
                                <SelectTrigger className="border-red-200 focus:border-red-500">
                                  <SelectValue
                                    placeholder={field.placeholder}
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  {field.options?.map((option) => (
                                    <SelectItem key={option} value={option}>
                                      {option.charAt(0).toUpperCase() +
                                        option.slice(1)}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            ) : field.type === "textarea" ? (
                              <Textarea
                                {...controllerField}
                                placeholder={field.placeholder}
                                className="border-red-200 focus:border-red-500"
                              />
                            ) : (
                              <Input
                                {...controllerField}
                                placeholder={field.placeholder}
                                className="border-red-200 focus:border-red-500"
                                type={field.name === "email" ? "email" : "text"}
                              />
                            )
                          }
                        />
                        {errors[field.name as keyof FormData] && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors[field.name as keyof FormData]?.message}
                          </p>
                        )}
                      </div>
                    ))}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mt-6">
                {currentStep > 0 && (
                  <Button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800"
                  >
                    Previous
                  </Button>
                )}
                {currentStep < formFields.length / 4 - 1 ? (
                  <Button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    className="bg-red-600 hover:bg-red-700 text-white ml-auto"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white ml-auto"
                  >
                    Submit Application
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Decorative element */}
      <motion.div
        className="absolute bottom-4 right-4 text-red-600"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={32} />
      </motion.div>
    </div>
  );
}
