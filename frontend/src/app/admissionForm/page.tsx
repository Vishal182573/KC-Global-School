"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BACKEND_URL } from '@/lib/constant';
import axios from 'axios';
import { FormInputIcon } from 'lucide-react'; // Use a chat or custom icon

const StacticAdmissionForm = () => {
    const [isFormOpen,setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    class: '',
    currentSchoolName: '',
    fatherName: '',
    motherName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/form/submitform`, formData);
      if (response.status == 200) {
        alert('Form submitted successfully!');
        setIsFormOpen(false);
        setFormData({
          name: '',
          gender: '',
          class: '',
          currentSchoolName: '',
          fatherName: '',
          motherName: '',
          email: '',
          phoneNumber: '',
          address: '',
        });
      } else {
        alert('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="h-full  p-6 ">
      <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '100%' }}
            className="bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: '0%', opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              className="bg-white p-8 rounded-lg shadow-xl w-full "
            >
              <h2 className="text-2xl font-bold mb-4">Submission Form</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full p-2 border rounded"
                  required
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  placeholder="Class"
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="currentSchoolName"
                  value={formData.currentSchoolName}
                  onChange={handleInputChange}
                  placeholder="Current School Name"
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  placeholder="Father's Name"
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  placeholder="Mother's Name"
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full p-2 border rounded"
                  required
                />
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  className="w-full p-2 border rounded"
                  required
                ></textarea>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default StacticAdmissionForm;
