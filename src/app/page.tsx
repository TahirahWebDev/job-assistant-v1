'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AboutSection from './components/AboutSection';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-orange-500/30 pt-10 overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      <section className="relative z-10 flex flex-col items-center px-6 pt-20 pb-10">
        <div className="w-full max-w-6xl">
          
          {/* Header Area - Reduced Margin */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[1px] w-12 bg-gradient-to-r from-orange-500 to-transparent"></span>
              <span className="text-[10px] font-black tracking-[0.4em] text-orange-500 uppercase">System Active</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">
              AI Job <span className="text-gray-500">Assistant</span>
            </h1>
            <p className="text-gray-400 text-base max-w-xl font-light leading-relaxed">
              Your professional command center. Streamline your career, practice interviews, and build elite resumes with neural assistance.
            </p>
          </div>

          {/* Action Bar - Reduced Margin */}
          <div className="relative mb-10 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative">
              <input
                placeholder="Ask the assistant anything..."
                onFocus={() => router.push('/chat')}
                readOnly
                className="w-full p-5 md:p-6 bg-[#0f0f0f] border border-white/10 rounded-2xl text-lg md:text-xl focus:outline-none cursor-pointer transition-all placeholder:text-gray-600"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-4">
                 <span className="hidden md:block text-[9px] font-bold text-gray-500 uppercase tracking-widest">Click to start</span>
                 <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                 </div>
              </div>
            </div>
          </div>

          {/* Tools Grid - Compact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ToolCard 
              href="/resume" 
              title="Resume Builder" 
              desc="Construct high-conversion resumes"
              color="orange" 
            />
            <ToolCard 
              href="/interview" 
              title="Interview Prep" 
              desc="Simulate real-world scenarios"
              color="blue" 
            />
            <ToolCard 
              href="/career" 
              title="Career Suggestion" 
              desc="Deep-pathway competency mapping"
              color="green" 
            />
          </div>
        </div>
      </section>

      {/* About section follows naturally below the fold */}
      <AboutSection />
    </main>
  );
}

function ToolCard({ href, title, desc, color }: any) {
  const accentColors: any = {
    orange: "group-hover:text-orange-500",
    blue: "group-hover:text-blue-500",
    green: "group-hover:text-green-500",
  };

  return (
    <Link href={href} className="group relative p-6 bg-[#111] border border-white/5 rounded-2xl transition-all duration-500 hover:bg-[#161616] hover:border-white/10">
      <div className="mb-3 flex justify-between items-start">
        <div className={`p-2.5 rounded-lg bg-white/5 ${accentColors[color]} transition-colors`}>
          {color === 'orange' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>}
          {color === 'blue' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>}
          {color === 'green' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>}
        </div>
        <svg className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </Link>
  );
}