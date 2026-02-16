'use client';
import { useLanguage } from '@/components/language-provider';
import { content } from '@/lib/content';

export default function About() {
  const { language } = useLanguage();
  const aboutContent = content[language].about;

  return (
    <section id="tentang-saya" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12 text-foreground">{aboutContent.title}</h2>
        <div className="grid items-start gap-12 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-3">
              <p className="text-foreground/90 md:text-xl/relaxed">
                {aboutContent.p1}
              </p>
              <p className="text-foreground/90 md:text-xl/relaxed">
                {aboutContent.p2}
              </p>
            </div>
            <div className="flex flex-col gap-6 lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground">{aboutContent.achievementsTitle}</h3>
              <ul className="space-y-4">
                {aboutContent.achievements.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary-foreground">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <span className="flex-1 pt-1 text-foreground/90">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </section>
  );
}
