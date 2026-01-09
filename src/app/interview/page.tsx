'use client';

import { useState, useRef, useEffect } from 'react';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';

export default function InterviewPrepPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8000";

  const handleSend = async (input: string) => {
    // Add user message and assistant placeholder
    setMessages(prev => [...prev, `You: ${input}`, 'Assistant: ...']);
    
    try {
      const url = `${BACKEND_URL}/api/chat`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errMsg = data.detail || data.error || `Server error ${res.status}`;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = `Assistant: Error: ${errMsg}`;
          return updated;
        });
        return;
      }

      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = `Assistant: ${data.response ?? 'No reply from server'}`;
        return updated;
      });
    } catch (err) {
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = 'Assistant: Error talking to backend';
        return updated;
      });
    }
  };

  // Prevent full page scroll during auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
      });
    }
  }, [messages]);

  return (
    <main className="h-screen bg-[#080808] text-white flex flex-col overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23ffffff'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="relative z-10 flex flex-col h-full max-w-5xl mx-auto pt-24 pb-6 px-4 w-full">
        {/* Header Section */}
        <div className="flex-none flex items-center justify-between mb-6 border-b border-white/5 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-black tracking-widest text-gray-500 uppercase">Interview Simulator Online</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tighter">Prepare For <span className="text-gray-500 font-light">Interview</span></h1>
          </div>
          <button 
            onClick={() => setMessages([])} 
            className="text-[10px] font-bold text-gray-400 hover:text-white uppercase tracking-[0.2em] transition-colors"
          >
            End Session
          </button>
        </div>

        {/* Chat Content Area */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-8 custom-scrollbar scroll-smooth">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center opacity-10 text-center">
              <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              <p className="text-xs font-bold uppercase tracking-[0.5em]">Simulation Ready</p>
              <p className="mt-2 text-[10px]">Start by typing the job role you are interviewing for.</p>
            </div>
          )}
          
          {messages.map((msg, idx) => {
            const isUser = msg.startsWith('You:');
            return (
              <ChatBubble
                key={idx}
                message={msg.replace('You: ', '').replace('Assistant: ', '')}
                isUser={isUser}
              />
            );
          })}
          {/* Scroll Anchor */}
          <div ref={scrollRef} className="h-4 w-full" />
        </div>

        {/* Bottom Input Area */}
        <div className="flex-none pt-6 bg-gradient-to-t from-[#080808] via-[#080808] to-transparent">
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </main>
  );
}