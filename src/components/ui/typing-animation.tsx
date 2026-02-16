'use client';
import { useState, useEffect } from 'react';

export default function TypingAnimation({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Reset animation when the text prop changes (e.g., on language switch)
    setDisplayedText('');
    setIndex(0);
  }, [text]);

  useEffect(() => {
    const typingSpeed = 100;
    const pauseDuration = 2000;

    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    } else {
      // At the end of the text, pause for a bit, then reset for the loop
      const timeoutId = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, pauseDuration);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  return (
    <>
      {displayedText}
      <span className="blinking-cursor">|</span>
    </>
  );
}
