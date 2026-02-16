'use client';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const navLinks = [
  { name: 'Tentang Saya', href: '#tentang-saya' },
  { name: 'Portofolio', href: '#portofolio' },
  { name: 'Keahlian', href: '#keahlian' },
  { name: 'Kontak', href: '#kontak' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-semibold tracking-tight font-headline">
          Annisa Ramadhona
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
            <nav className="items-center gap-8 flex">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
                  {link.name}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="text-2xl font-semibold tracking-tight font-headline" onClick={() => setIsOpen(false)}>
                    Annisa Ramadhona
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link key={link.name} href={link.href} className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
