'use client';
import { Button } from '@/components/ui/button';
import { MessageCircleHeart } from 'lucide-react';

interface ChatbotTriggerProps {
  onClick: () => void;
}

export default function ChatbotTrigger({ onClick }: ChatbotTriggerProps) {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-5 right-5 z-50 h-16 w-16 rounded-full bg-[#FFD1DC] shadow-xl transition-transform hover:scale-110 hover:bg-pink-300 active:scale-100"
      size="icon"
    >
      <MessageCircleHeart className="h-8 w-8 text-pink-800" />
    </Button>
  );
}
