import React from "react";
import Image from "next/image";
import aboutImg from "../../../public/images/about.png";

const AboutSection = () => {
  return (
    <section className="py-24 flex justify-center bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center justify-between gap-16 px-6">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 tracking-widest text-[10px] uppercase font-bold text-gray-400">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span>Platform Intelligence</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none">
            Modernizing <br /> 
            <span className="text-white/40">the way you</span> <br />
            Work.
          </h1>
          
          <div className="max-w-xl space-y-6 text-gray-400 font-light leading-relaxed text-lg">
            <p>
              Welcome to a <span className="text-white font-medium">productivity hub</span> engineered for the modern professional. 
              We bridge the gap between effort and impact, centralizing tools that transform general knowledge into 
              <span className="text-white font-medium"> career-defining results</span>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 text-sm uppercase tracking-widest font-bold">
              <div className="flex items-center gap-2 border-l border-orange-500 pl-4">
                <span className="text-orange-500">01</span> <span>AI Assistance</span>
              </div>
              <div className="flex items-center gap-2 border-l border-green-500 pl-4">
                <span className="text-green-500">02</span> <span>Career Prep</span>
              </div>
              <div className="flex items-center gap-2 border-l border-blue-500 pl-4">
                <span className="text-blue-500">03</span> <span>Skill Growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image with "Glass & Glow" Border */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Subtle Cyber-Glow */}
          <div className="absolute w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
          
          <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white/20 to-transparent shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
            <div className="bg-[#111] rounded-[2.4rem] p-3 backdrop-blur-xl">
              <Image
                src={aboutImg}
                alt="AI Platform"
                className="rounded-[2rem] w-full max-w-[420px] grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
            
            {/* Minimalist Floating Accent */}
            <div className="absolute -bottom-4 -right-4 bg-white text-black px-6 py-4 rounded-2xl shadow-2xl">
              <p className="text-[10px] uppercase font-black tracking-widest leading-none">Status</p>
              <p className="text-xl font-bold">Always On</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;