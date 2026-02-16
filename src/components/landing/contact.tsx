'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import { content } from '@/lib/content';


export default function Contact() {
  const { language } = useLanguage();
  const contactContent = content[language].contact;
  
  return (
    <section id="kontak" className="relative w-full overflow-hidden bg-background py-20 md:py-32">
       <div
        className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f6c1cc_1px,transparent_1px),linear-gradient(to_bottom,#f6c1cc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
        style={{
          maskImage: 'radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)',
        }}
       ></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {contactContent.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            {contactContent.subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300">
              <Link href={contactContent.email}>{contactContent.button}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
