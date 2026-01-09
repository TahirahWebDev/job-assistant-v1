'use client';

import { useState, useRef, useEffect } from 'react';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8000";

  const handleSend = async (input: string) => {
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
        updated[updated.length - 1] = `Assistant: ${data.response ?? 'No reply'}`;
        return updated;
      });
    } catch (err) {
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = 'Assistant: Error connecting to server';
        return updated;
      });
    }
  };

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
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23ffffff'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="relative z-10 flex flex-col h-full max-w-5xl mx-auto pt-24 pb-6 px-4 w-full">
        {/* Header Section */}
        <div className="flex-none flex items-center justify-between mb-6 border-b border-white/5 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-black tracking-widest text-gray-500 uppercase">Encrypted Link Active</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tighter">AI <span className="text-gray-500 font-light">Assistant</span></h1>
          </div>
          <button onClick={() => setMessages([])} className="text-[10px] font-bold text-gray-500 hover:text-white uppercase tracking-[0.2em] transition-colors">
            Reset Module
          </button>
        </div>

        {/* Message Area */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-8 custom-scrollbar">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center opacity-10">
              <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
              <p className="text-xs font-bold uppercase tracking-[0.5em]">System Idle</p>
            </div>
          )}
          {messages.map((msg, idx) => (
            <ChatBubble key={idx} message={msg.replace('You: ', '').replace('Assistant: ', '')} isUser={msg.startsWith('You:')} />
          ))}
          <div ref={scrollRef} className="h-4" />
        </div>

        {/* Input Bar */}
        <div className="flex-none pt-6 bg-gradient-to-t from-[#080808] via-[#080808] to-transparent">
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </main>
  );
}