import React from 'react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-500">Xtreme Cleaning</h3>
            <p className="text-gray-400 mb-4">Extreme cleaning for sparkling results. Your satisfaction is our priority.</p>
             <div className="flex space-x-4 mt-4">
                <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors"><FacebookIcon className="h-6 w-6" /></a>
                <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors"><InstagramIcon className="h-6 w-6" /></a>
                <a href="#" aria-label="TikTok" className="hover:text-gray-300 transition-colors"><TikTokIcon className="h-6 w-6" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+1 (347)-232-4984</li>
              <li>sissycarolinareynoso@gmail.com</li>
              <li>56 Bradrick Ln. West Milford, NJ 07480</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Weekdays: 8:00 AM - 6:00 PM</li>
              <li>Weekends: Flexible Schedule</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Xtreme Cleaning. All rights reserved.</p>
          <p className="mt-1">
            <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
