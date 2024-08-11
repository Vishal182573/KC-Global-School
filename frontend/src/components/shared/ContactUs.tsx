import Image from 'next/image';
import React from 'react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      details: ['KC GLOBAL SCHOOL', 'Barakhamba Road,', 'New Delhi 110001']
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['011-23311618/19/20']
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['principal@modernschool.net,', 'modern@modernschool.net']
    },
    {
      icon: '📠',
      title: 'Fax No',
      details: ['011-23516214']
    }
  ];

  return (
    <div className="bg-white rounded-lg">
      <div className="relative h-64 overflow-hidden">
        <Image
          src="https://drive.google.com/uc?export=download&id=18XgbolAsZSBnHe1_OCMt58SijNHaso_S"
          alt="School Building"
          className="w-full h-full object-cover"
          width={2000}
          height={1000}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start">
          <h1 className="text-white text-4xl font-bold ml-8">Contact</h1>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <span className="text-3xl">{info.icon}</span>
              </div>
              <h3 className="text-blue-600 font-semibold mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;