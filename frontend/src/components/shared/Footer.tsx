"use client";

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoMail, IoCall, IoLocation } from 'react-icons/io5';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Contact Us</h2>
          <p className="flex items-center">
            <IoMail className="mr-2 text-blue-400" />
            <a href="mailto:info@kcglobalschool.com" className="hover:text-blue-400 transition-colors">info@kcglobalschool.com</a>
          </p>
          <p className="flex items-center">
            <IoCall className="mr-2 text-blue-400" />
            <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">+1 234 567 890</a>
          </p>
          <p className="flex items-center">
            <IoLocation className="mr-2 text-blue-400" />
            123 School Lane, Education City, EC 12345
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Quick Links</h2>
          <ul className="space-y-2">
            {['About Us', 'Admissions', 'Contact', 'FAQ'].map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-400 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Connect With Us</h2>
          <div className="flex space-x-4">
            {[
              { icon: FaFacebook, color: 'text-blue-500', href: 'https://www.facebook.com/kcglobalschool' },
              { icon: FaInstagram, color: 'text-pink-500', href: 'https://www.instagram.com/kcglobalschool' },
              { icon: FaYoutube, color: 'text-red-500', href: 'https://www.youtube.com/kcglobalschool' },
            ].map(({ icon: Icon, color, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={`${color} hover:opacity-75 transition-opacity`}>
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.724695805368!2d-122.08424908467588!3d37.42206527982532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0fae7ff8135%3A0x2a0b4d0e66b8b30d!2sGoogleplex!5e0!3m2!1sen!2sus!4v1641543392793!5m2!1sen!2sus"
            width="100%"
            height="200"
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p>&copy; {new Date().getFullYear()} KC GLOBAL SCHOOL. All rights reserved.</p>
      </div>
    </footer>
  );
}