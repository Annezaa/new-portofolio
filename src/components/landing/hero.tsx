import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-white to-pink-50/50 -z-10 opacity-50" />

        <div className="container px-4 md:px-6 z-10">
          <div className="space-y-4 max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-800 dark:text-gray-100">
                Halo, saya Annisa Ramadhona
              </h1>
              <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl dark:text-gray-300">
                Mathematics Educator | SEA Teacher | Academic Writer | Education Innovator
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link href="#portofolio">Lihat Portofolio</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/annisa-ramadhona-cv.pdf" download>Download CV</Link>
                </Button>
              </div>
              <p className="pt-8 text-lg text-gray-500 dark:text-gray-400 italic max-w-2xl mx-auto">
                Seorang pendidik matematika yang percaya bahwa matematika bukan sekadar angka, tetapi cara berpikir, cara merasa, dan cara memahami dunia.
             </p>
          </div>
        </div>
    </section>
  );
}
