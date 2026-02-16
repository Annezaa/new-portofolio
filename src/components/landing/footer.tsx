'use client';
import { Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import { content } from '@/lib/content';

export default function Footer() {
  const { language } = useLanguage();
  const footerContent = content[language].footer;

  return (
    <footer className="w-full bg-secondary border-t py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6">
        <p className="text-sm text-foreground/70">
          {footerContent.copyright}
        </p>
        <div className="flex gap-1">
          <Button asChild variant="ghost" size="icon">
            <Link href={footerContent.linkedin} target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-foreground/80 hover:text-primary" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href={footerContent.instagram} target="_blank" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-foreground/80 hover:text-primary" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
