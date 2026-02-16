import { Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary border-t py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6">
        <p className="text-sm text-foreground/70">
          © 2026 Annisa Ramadhona. All rights reserved.
        </p>
        <div className="flex gap-1">
          <Button asChild variant="ghost" size="icon">
            <Link href="https://linkedin.com/in/annisaramadhona" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-foreground/80 hover:text-primary" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="https://instagram.com/annisaramadhona" target="_blank" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-foreground/80 hover:text-primary" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
