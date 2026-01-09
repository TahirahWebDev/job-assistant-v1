import React from "react";
import Link from "next/link";
import Image from "next/image";
// Removed Twitter and Mail to fix "Defined but never used" errors
import { Linkedin, Github, Instagram } from "lucide-react";
import logo1 from "../../../public/images/logo1.png"; 

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6 transition-transform hover:scale-105 active:scale-95">
               <Image 
                 src={logo1} 
                 alt="AI Job Assistant Logo" 
                 width={180} 
                 height={60} 
                 className="object-contain"
                 priority
               />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
              Elevating career development through neural intelligence and specialized preparation tools.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/chat" className="hover:text-white transition-colors">AI Chat</Link></li>
            </ul>
          </div>

          {/* Tools Column */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Tools</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/resume" className="hover:text-orange-400 transition-colors">Resume Builder</Link></li>
              <li><Link href="/interview" className="hover:text-blue-400 transition-colors">Interview Prep</Link></li>
              <li><Link href="/career" className="hover:text-green-400 transition-colors">Career Pathways</Link></li>
            </ul>
          </div>

          {/* Social/Connect Column */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Connect</h4>
            <div className="flex gap-3 mb-6">
               <SocialLink href="https://www.linkedin.com/in/tahirah-roohi/" icon={<Linkedin size={18} />} hoverColor="hover:text-blue-500" />
               <SocialLink href="https://github.com/Mehak-Akram/" icon={<Github size={18} />} hoverColor="hover:text-white" />
               <SocialLink href="https://www.instagram.com/maryam.arif_?igsh=NzRsYmZmc2h3MXlq" icon={<Instagram size={18} />} hoverColor="hover:text-pink-500" />
            </div>
            <p className="text-[11px] font-medium text-gray-600 tracking-tight italic">
              Empowering the next generation of talent.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold">
            &copy; {new Date().getFullYear()} AI Job Readiness Assistant.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold">
              Refining Careers <span className="text-white">Worldwide.</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, hoverColor }: { href: string; icon: React.ReactNode; hoverColor: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-white/10 ${hoverColor}`}
    >
      {icon}
    </a>
  );
}