'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Free Estimate', href: '/free-estimate', className: 'bg-summit-red text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Summit Pro Painting"
              width={100}
              height={100}
              className="w-auto h-24"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center text-red-500 font-semibold">
              <FaPhone className="mr-2" />
              <span className="text-lg">214-930-6540</span>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  item.className || 
                  'text-blue-900 hover:text-red-500 transition-colors font-medium'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center px-4 py-2 text-red-500 font-semibold">
                <FaPhone className="mr-2" />
                <span className="text-lg">214-930-6540</span>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.className || 
                    'text-summit-teal hover:text-summit-yellow transition-colors font-medium'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 