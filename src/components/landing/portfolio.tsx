'use client';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpenCheck, Globe, FileText, Lightbulb, Smartphone } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { content } from '@/lib/content';

const icons: { [key: string]: React.ElementType } = {
  BookOpenCheck,
  Globe,
  FileText,
  Lightbulb,
  Smartphone
};

export default function Portfolio() {
  const { language } = useLanguage();
  const portfolioContent = content[language].portfolio;

  return (
    <section id="portofolio" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">{portfolioContent.title}</h2>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
            {portfolioContent.subtitle}
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioContent.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <Card key={item.title} className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card border-transparent hover:border-primary">
                <CardHeader className="flex flex-row items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardDescription className="px-6 pb-6 text-foreground/80">{item.description}</CardDescription>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
