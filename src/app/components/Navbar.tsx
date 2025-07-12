// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="logo font-bold text-2xl font-serif">
          <span className='text-orange-200'>AI</span> <span className='text-blue-200'>Job</span> <span className='text-green-200'>Assistant</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:bg-gray-400 px-3 py-2 rounded font-mono text-1x">
            Home
          </Link>
          <Link href="/chat" className="hover:bg-gray-400 px-3 py-2 rounded font-mono text-1x">
            Chat
          </Link>
          <Link href="/resume" className="hover:bg-gray-400 px-3 py-2 rounded font-mono text-1x">
            Resume
          </Link>
          <Link href="/interview" className="hover:bg-gray-400 px-3 py-2 rounded font-mono text-1x">
            Interview
          </Link>
          <Link href="/career" className="hover:bg-gray-400 px-3 py-2 rounded font-mono text-1x">
            Career
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link href="/" className="block px-3 py-2 hover:bg-blue-700 rounded">
            Home
          </Link>
          <Link href="/chat" className="block px-3 py-2 hover:bg-blue-700 rounded">
            Chat
          </Link>
          <Link href="/resume" className="block px-3 py-2 hover:bg-blue-700 rounded">
            Resume
          </Link>
          <Link href="/interview" className="block px-3 py-2 hover:bg-blue-700 rounded">
            Interview
          </Link>
          <Link href="/career" className="block px-3 py-2 hover:bg-blue-700 rounded">
            Career
          </Link>
        </div>
      )}
    </nav>
  );
}