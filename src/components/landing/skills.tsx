'use client';
import { Badge } from '@/components/ui/badge';
import { BookMarked, Sigma, FileText, Mic, Film, Users, Globe2 } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { content } from '@/lib/content';
import TitleTypingAnimation from '@/components/ui/title-typing-animation';

const icons: { [key: string]: React.ElementType } = {
  BookMarked,
  Sigma,
  FileText,
  Mic,
  Film,
  Users,
  Globe2,
};

export default function Skills() {
  const { language } = useLanguage();
  const skillsContent = content[language].skills;

  return (
    <section id="keahlian" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <TitleTypingAnimation text={skillsContent.title} className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl" />
          <p className="mt-4 text-foreground/80 md:text-xl/relaxed">
            {skillsContent.subtitle}
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {skillsContent.skillList.map((skill) => {
            const Icon = icons[skill.icon];
            return (
              <Badge key={skill.name} variant="outline" className="text-lg bg-card border-primary/50 text-foreground rounded-full py-3 px-6 flex items-center gap-3 transition-colors duration-300 hover:bg-primary/10 hover:border-primary/80 cursor-pointer font-medium">
                {Icon && <Icon className="h-5 w-5 text-primary" />}
                <span>{skill.name}</span>
              </Badge>
            );
          })}
        </div>
      </div>
    </section>
  );
}
