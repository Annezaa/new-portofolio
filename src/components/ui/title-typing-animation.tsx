'use client';
import { useState, useEffect } from 'react';

// A component that types out the given text once.
export default function TitleTypingAnimation({ text, className }: { text: string, className?: string }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset on text change or remount
    let i = 0;
    if (text) {
      const intervalId = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i > text.length) {
          clearInterval(intervalId);
        }
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, [text]);

  return (
    <>
      <span className={className}>{displayedText}</span>
      {displayedText.length < text.length && <span className="blinking-cursor">|</span>}
    </>
  );
}
