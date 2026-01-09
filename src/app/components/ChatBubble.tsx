import React from 'react';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';

type Props = {
  message: string;
  isUser?: boolean;
};

export default function ChatBubble({ message, isUser = false }: Props) {
  return (
    <div className={clsx('flex items-start gap-4', isUser ? 'flex-row-reverse' : 'flex-row')}>
      {/* Icon Avatar */}
      <div className={clsx(
        'flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-xl',
        isUser ? 'bg-white text-black' : 'bg-[#1a1a1a] border border-white/10 text-orange-500'
      )}>
        {isUser ? '🧑' : '🤖'}
      </div>

      {/* Message Content Container */}
      <div
        className={clsx(
          'px-5 py-3 rounded-2xl text-sm md:text-base break-words border transition-all',
          'max-w-[85%] md:max-w-[75%]',
          isUser
            ? 'bg-white/5 border-white/10 text-white rounded-tr-none'
            : 'bg-white/[0.02] border-white/5 text-gray-300 rounded-tl-none'
        )}
      >
        {/* Wrap in a div with custom classes to ensure Markdown elements (bold, lists) are visible */}
        <div className="custom-chat-prose">
          <ReactMarkdown>
            {message}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}