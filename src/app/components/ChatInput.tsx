'use client';
import React, { useState } from 'react';

interface ChatInputProps {
  onSend: (msg: string) => void | Promise<void>;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl blur opacity-30 group-focus-within:opacity-100 transition duration-500"></div>
      
      <div className="relative flex items-center bg-[#111] border border-white/10 rounded-2xl overflow-hidden focus-within:border-white/20 shadow-2xl">
        <input
          className="flex-1 p-5 bg-transparent text-white focus:outline-none placeholder:text-gray-700 font-medium"
          placeholder="Ask the AI assistant anything..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="mr-3 p-3 bg-white text-black rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </button>
      </div>
    </form>
  );
}