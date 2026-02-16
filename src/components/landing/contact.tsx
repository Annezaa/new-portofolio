import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="kontak" className="w-full bg-secondary/30 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Mari Berkolaborasi
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Saya terbuka untuk kolaborasi, proyek pendidikan, dan gagasan inovatif yang membawa dampak nyata. Mari bangun sesuatu yang bermakna bersama.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300">
              <Link href="mailto:annisa031104@gmail.com">Kirim Pesan</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
