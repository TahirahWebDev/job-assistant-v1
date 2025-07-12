'use client';

import { useState } from 'react';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';

export default function ResumePage() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = async (input: string) => {
    setMessages(prev => [...prev, `You: ${input}`, "Assistant: ..."]);

    try {
        const res = await fetch("/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: input }),
});

      const data = await res.json();
      const reply = data.response;

      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = `Assistant: ${reply}`;
        return updated;
      });
    } catch (err) {
      setMessages(prev => [...prev, "Assistant: Error talking to backend"]);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-black">Generate Your Resume</h1>

        <div className="bg-gray-100 rounded-lg p-4 h-64 overflow-y-auto mb-4">
          {messages.map((msg, idx) => {
            const isUser = msg.startsWith("You:");
            return (
              <ChatBubble key={idx} message={msg.replace("You: ", "").replace("Assistant: ", "")} isUser={isUser} />
            );
          })}
        </div>

        <ChatInput onSend={handleSend} />
      </div>
    </main>
  );
}
