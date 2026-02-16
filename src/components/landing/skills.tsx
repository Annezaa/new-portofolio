import { Badge } from '@/components/ui/badge';
import { Layers, Brush, Video, PenTool, Figma, Monitor } from 'lucide-react';

const skills = [
  { name: 'Graphic Design', icon: Brush },
  { name: 'UI/UX Design', icon: Figma },
  { name: 'Content Creation', icon: Video },
  { name: 'Illustration', icon: PenTool },
  { name: 'Web Design', icon: Monitor },
  { name: 'Branding', icon: Layers },
];

export default function Skills() {
  return (
    <section id="keahlian" className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Keahlian</h2>
          <p className="mt-4 text-foreground/80 md:text-xl/relaxed">
            My area of expertise and the tools I love to work with.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Badge key={skill.name} variant="outline" className="text-lg bg-background border-primary/50 text-primary-foreground rounded-full py-2 px-6 flex items-center gap-2 transition-all hover:bg-primary/10 cursor-pointer text-md font-medium">
                <Icon className="h-5 w-5 text-primary" />
                <span>{skill.name}</span>
              </Badge>
            );
          })}
        </div>
      </div>
    </section>
  );
}
