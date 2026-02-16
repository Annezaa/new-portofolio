'use client';
import { BookMarked, Sigma, FileText, Mic, Film, Users, Globe2 } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { content } from '@/lib/content';
import TitleTypingAnimation from '@/components/ui/title-typing-animation';
import { useState, useEffect } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simple fade-in effect on component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="keahlian" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <TitleTypingAnimation text={skillsContent.title} className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl text-foreground" />
          <p className={`mt-4 text-foreground/80 md:text-xl/relaxed transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '100ms' }}>
            {skillsContent.subtitle}
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {skillsContent.skillList.map((skill, index) => {
            const Icon = icons[skill.icon];
            return (
              <div
                key={skill.name}
                className={`
                  group rounded-full
                  transition-all duration-500 ease-in-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                `}
                style={{ transitionDelay: `${200 + index * 75}ms` }}
              >
                <div
                  className="
                    bg-primary/20 text-primary-foreground 
                    rounded-full py-3 px-6 flex items-center gap-3 
                    font-medium cursor-pointer border-2 border-transparent
                    transition-all duration-300 ease-in-out
                    group-hover:scale-110 group-hover:bg-card group-hover:text-primary group-hover:border-primary
                  "
                >
                  {Icon && <Icon className="h-5 w-5 transition-colors duration-300" />}
                  <span>{skill.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
