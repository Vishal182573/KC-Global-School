import Image from 'next/image';
import React from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: (
        <a href="https://maps.app.goo.gl/iKhEsE4aN5XpfFRh6" target="_blank" rel="noopener noreferrer">
          <MdLocationPin className="text-3xl text-red-500 " />
        </a>
      ),
      title: 'Location',
      details: ['N.S 28 Delta 2, Greater Noida,', 'Uttar Pradesh 201306'],
    },
    {
      icon: (
        <a href="tel:+919871347339">
          <FaPhone className="text-3xl text-blue-500 rotate-90" />
        </a>
      ),
      title: 'Phone',
      details: ['+91 9871347339, +91 9871247339, +91 1204560225'],
    },
    {
      icon: (
        <a href="mailto:kcglobalschool@gmail.com">
          <FaEnvelope className="text-3xl text-yellow-500" />
        </a>
      ),
      title: 'Email',
      details: ['kcglobalschool@gmail.com'],
    },
    {
      icon: (
        <a href="https://wa.me/919871247339" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-3xl text-green-500" />
        </a>
      ),
      title: 'WhatsApp',
      details: ['+91 9871247339'],
    },
  ];

  return (
    <div className="bg-card rounded-lg shadow-lg ">
      <div className="relative h-64 overflow-hidden">
        <Image
          src="https://drive.google.com/uc?export=download&id=18XgbolAsZSBnHe1_OCMt58SijNHaso_S"
          alt="School Building"
          className="w-full h-full object-cover"
          width={2000}
          height={1000}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start">
          <h1 className="text-white text-4xl font-bold ml-8 font-display">Contact</h1>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-accent/10 rounded-full p-4 mb-4 bg-slate-100">
                {info.icon}
              </div>
              <h3 className="text-primary font-semibold mb-2 font-display">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-muted-foreground font-body">{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
