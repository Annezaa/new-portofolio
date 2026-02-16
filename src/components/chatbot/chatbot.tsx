'use client';
import { useState } from 'react';
import ChatPopup from './chat-popup';
import ChatbotTrigger from './chatbot-trigger';
import { chat } from '@/ai/flows/chatbot-flow';
import { Message } from './types';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content: 'Halo! Saya asisten AI Annisa. Ada yang bisa saya bantu terkait portofolio, proyek, atau pengalamannya?',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (userInput: string) => {
    if (!userInput.trim()) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: userInput }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Prepare history for the AI model
      const history = newMessages.slice(0, -1).map(msg => ({
        role: msg.role,
        content: [{ text: msg.content }]
      }));

      const aiResponse = await chat({ message: userInput, history: history });
      
      setMessages(prevMessages => [
        ...prevMessages,
        { role: 'model', content: aiResponse.response },
      ]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages(prevMessages => [
        ...prevMessages,
        {
          role: 'model',
          content: 'Maaf, terjadi sedikit kendala. Silakan coba lagi nanti.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ChatbotTrigger onClick={toggleChat} />
      {isOpen && (
        <ChatPopup
          messages={messages}
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
          onClose={toggleChat}
        />
      )}
    </>
  );
}
