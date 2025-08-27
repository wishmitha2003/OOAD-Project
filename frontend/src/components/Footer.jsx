import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  PhoneCall,
  MapPin,
} from 'lucide-react';

// Reusable Social Icon Button
const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2E7D32] transition-colors duration-300"
  >
    {icon}
  </a>
);

// Reusable Footer Link
const FooterLink = ({ label }) => (
  <li>
    <a
      href="#"
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      {label}
    </a>
  </li>
);

// Main Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="text-2xl font-bold flex items-center mb-4">
              <span className="text-[#2E7D32]">Gen</span>
              <span className="text-[#2196F3]">Z</span>
              <span className="text-[#2E7D32]">sport</span>
            </div>
            <p className="text-gray-400 mb-4">
              Elevating athletic performance with premium sports equipment for the next generation.
            </p>
            <div className="flex space-x-3">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <FooterLink label="All Products" />
              <FooterLink label="Training Gear" />
              <FooterLink label="Footwear" />
              <FooterLink label="Gym Equipment" />
              <FooterLink label="Outdoor Sports" />
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink label="About Us" />
              <FooterLink label="Careers" />
              <FooterLink label="Press" />
              <FooterLink label="Sustainability" />
              <FooterLink label="Affiliates" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#2E7D32] flex-shrink-0 mt-1" />
                <span className="text-gray-400">onlinegenzsport@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneCall size={18} className="text-[#2E7D32] flex-shrink-0 mt-1" />
                <span className="text-gray-400">+94 77 417 6891</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#2E7D32] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Kaikawala,Induruwa
                  <br />
                  SriLanka
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2023 GenZsport. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Shipping Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Returns
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;