import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');
  
  return (
    <section id="tentang-saya" className="relative w-full">
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 -left-64 h-[28rem] w-[28rem] rounded-full bg-primary/20 opacity-50 blur-3xl" />
        <div className="absolute bottom-0 -right-64 h-[28rem] w-[28rem] rounded-full bg-pink-300/20 opacity-50 blur-3xl" />
      </div>
       <div className="container mx-auto grid min-h-[calc(100vh-5rem)] items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24 md:px-6">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Halo, saya Annisa Ramadhona
          </h1>
          <p className="text-lg text-foreground/80 md:text-xl">
            Graphic Designer | Content Creator | UI/UX Enthusiast
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg font-semibold transition-transform hover:scale-105">
              <Link href="#portofolio">Lihat Portofolio</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-primary bg-transparent px-8 py-6 text-lg font-semibold text-primary hover:bg-primary/10 hover:text-primary transition-transform hover:scale-105">
              <Link href="/annisa-ramadhona-cv.pdf" download>Download CV</Link>
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
            <div className="absolute h-[420px] w-[420px] bg-primary/10 rounded-full blur-2xl -z-10"></div>
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              data-ai-hint={profileImage.imageHint}
              width={400}
              height={400}
              className="rounded-full object-cover shadow-2xl shadow-primary/20"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
