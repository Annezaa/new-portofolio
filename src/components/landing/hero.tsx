'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/components/language-provider';
import { content } from '@/lib/content';

export default function Hero() {
  const { language } = useLanguage();
  const heroContent = content[language].hero;
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-picture');

  return (
    <section id="home" className="w-full min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              {heroContent.greeting}
            </h1>
            <p className="text-lg text-foreground/80 md:text-xl">
              {heroContent.tagline}
            </p>
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
