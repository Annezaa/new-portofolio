'use client';
import { useState, useRef, useEffect } from 'react';
import { Message } from './types';
import { Send, X, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatPopupProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  onClose: () => void;
}

export default function ChatPopup({
  messages,
  onSendMessage,
  isLoading,
  onClose,
}: ChatPopupProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-20 right-5 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b bg-pink-100/50 rounded-t-2xl">
        <h3 className="font-serif font-semibold text-gray-800">Asisten AI Annisa</h3>
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'model' && (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFD1DC]">
                 <Bot className="h-5 w-5 text-pink-800" />
              </div>
            )}
             <div className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                msg.role === 'user'
                  ? 'bg-gray-200 text-gray-800 rounded-br-none'
                  : 'bg-[#FFD1DC] text-pink-950 rounded-bl-none'
              }`}
            >
              <p>{msg.content}</p>
            </div>
            {msg.role === 'user' && (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200">
                 <User className="h-5 w-5 text-gray-600" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start gap-3 justify-start">
             <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFD1DC]">
                <Bot className="h-5 w-5 text-pink-800" />
             </div>
             <div className="max-w-[75%] rounded-2xl px-4 py-2.5 text-sm bg-[#FFD1DC] text-pink-950 rounded-bl-none">
                <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-pink-600/70 [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 animate-pulse rounded-full bg-pink-600/70 [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 animate-pulse rounded-full bg-pink-600/70"></span>
                </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t bg-white rounded-b-2xl">
        <div className="relative">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Tanya sesuatu..."
            className="pr-12 bg-white ring-offset-0 focus-visible:ring-1 focus-visible:ring-pink-300"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-[#FFD1DC] text-pink-800 hover:bg-pink-200"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
