'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/components/language-provider';
import { content } from '@/lib/content';
import TypingAnimation from '@/components/ui/typing-animation';

export default function Hero() {
  const { language } = useLanguage();
  const heroContent = content[language].hero;
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-picture');

  return (
    <section id="home" className="w-full min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              {heroContent.greeting}
            </h1>
            <p className="text-lg text-foreground/80 md:text-xl min-h-[28px] lg:min-h-[32px]">
              <TypingAnimation text={heroContent.tagline} />
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link href="#portofolio">
                <Button size="lg" className="w-full sm:w-auto rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                  {heroContent.ctaPrimary}
                </Button>
              </Link>
              <Link href="#kontak">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-primary/50 hover:bg-primary/10 transition-colors">
                  {heroContent.ctaSecondary}
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            {profileImage && (
               <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={320}
                height={320}
                className="rounded-full object-cover shadow-2xl"
                data-ai-hint={profileImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
