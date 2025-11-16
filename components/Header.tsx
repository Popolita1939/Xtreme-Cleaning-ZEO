import React, { useState } from 'react';
import { MenuIcon, XIcon } from './Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-600">
          Xtreme Cleaning
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#quote"
          className="hidden md:inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-transform duration-300 hover:scale-105"
        >
          Get a Quote
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setIsMenuOpen(false)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-transform duration-300 hover:scale-105"
            >
              Get a Quote Now!
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
