import { Badge } from '@/components/ui/badge';
import { BookMarked, Sigma, FileText, Mic, Film, Users, Globe2 } from 'lucide-react';

const skills = [
  { name: 'Perancangan Pembelajaran Matematika', icon: BookMarked },
  { name: 'PMRI & Pemodelan Matematika', icon: Sigma },
  { name: 'Penulisan Ilmiah & Esai', icon: FileText },
  { name: 'Public Speaking & Debate', icon: Mic },
  { name: 'Educational Content Creation', icon: Film },
  { name: 'Classroom Management', icon: Users },
  { name: 'Cross-Cultural Teaching', icon: Globe2 },
];

export default function Skills() {
  return (
    <section id="keahlian" className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Keahlian</h2>
          <p className="mt-4 text-foreground/80 md:text-xl/relaxed">
            Area keahlian saya dan alat yang saya gunakan untuk menciptakan pengalaman belajar yang inovatif.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Badge key={skill.name} variant="outline" className="text-lg bg-background border-primary/50 text-foreground rounded-full py-3 px-6 flex items-center gap-3 transition-all hover:bg-primary/10 cursor-pointer font-medium">
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
