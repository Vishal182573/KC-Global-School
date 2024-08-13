"use client";

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoMail, IoCall, IoLocation } from 'react-icons/io5';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', url: '/about-us' },
    { name: 'Admissions', url: '/admission' },
    { name: 'Academic Programs', url: '/academics' },
    { name: 'Fee Structure', url: '/fee-structure' },
    { name: 'Faculty Messages', url: '/messages' },
    { name: 'Campus Infrastructure', url: '/facilities' },
    { name: 'News & Events', url: '/news-events' },
    { name: 'gallery', url: '/gallery' },
    { name: 'Contact', url: '/contact-us' },
  ];
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Contact Us</h2>
          <p className="flex items-center">
            <IoMail className="mr-2 text-blue-400" />
            <a href="mailto:info@kcglobalschool.com" className="hover:text-blue-400 transition-colors">Kcglobalschool@gmail.com</a>
          </p>
          <p className="flex items-center">
            <IoCall className="mr-2 text-blue-400" />
            <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">+91 9871347339, +91 9871247339, +91 1204560225</a>
          </p>
          <p className="flex items-center">
            <IoLocation className="mr-2 text-blue-400" />
            N.S 28 Delta 2, Greater Noida, Uttar Pradesh 201306
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Quick Links</h2>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.url} className="hover:text-blue-400 transition-colors">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Connect With Us</h2>
          <div className="flex flex-col space-y-4">
            {[
              { icon: FaFacebook, color: 'text-blue-500', href: 'https://www.facebook.com/kcglobalschoolgn', title: "KC Global Facebook" },
              { icon: FaInstagram, color: 'text-pink-500', href: 'https://www.instagram.com/kc_global_school?igsh=ZGVrMTcwcjdiZXpq', title: "KC Global Instagram" },
              { icon: FaYoutube, color: 'text-red-500', href: '/', title: "KC Global Facebook" },
            ].map(({ icon: Icon, color, href, title }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={`${color} hover:opacity-75 transition-opacity flex space-x-2`}>
                <Icon size={28} />
                <p>{title}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.627338163516!2d77.52054977475092!3d28.49076757574245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceba793249459%3A0x8b579d0a1a61acb7!2sKC%20GLOBAL%20SCHOOL!5e0!3m2!1sen!2sus!4v1723485909439!5m2!1sen!2sus"
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