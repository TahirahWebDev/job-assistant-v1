'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo1.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-white/5 h-20">
      <div className="container mx-auto h-full flex justify-between items-center px-6">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center group transition-transform hover:scale-105">
          <div className="relative">
            <Image
              src={logo}
              alt="AI Job Assistant Logo"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu - Refined Glass Style */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/chat" label="Chat" />
          <NavLink href="/resume" label="Resume" />
          <NavLink href="/interview" label="Interview" />
          <NavLink href="/career" label="Career" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
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

      {/* Mobile Menu - Dark Slide Down */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-4 space-y-2 animate-in slide-in-from-top duration-300">
          <MobileNavLink href="/" label="Home" />
          <MobileNavLink href="/about" label="About" />
          <MobileNavLink href="/chat" label="Chat" />
          <MobileNavLink href="/resume" label="Resume" />
          <MobileNavLink href="/interview" label="Interview" />
          <MobileNavLink href="/career" label="Career" />
        </div>
      )}
    </nav>
  );
}

// Sub-component for Desktop Links
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href} 
      className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 tracking-wide"
    >
      {label}
    </Link>
  );
}

// Sub-component for Mobile Links
function MobileNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href} 
      className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
    >
      {label}
    </Link>
  );
}