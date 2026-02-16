import { Mail, Linkedin, Instagram } from 'lucide-react';

const opportunities = [
  'Kolaborasi pendidikan',
  'Project penelitian',
  'Seminar & pelatihan',
  'Edu-content partnership',
];

export default function Contact() {
  return (
    <section id="kontak" className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hubungi Saya</h2>
            <p className="text-xl text-foreground/80">
              Let’s build meaningful education together.
            </p>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Saya terbuka untuk:</h3>
              <ul className="space-y-2">
                {opportunities.map((opp) => (
                  <li key={opp} className="flex items-center gap-3">
                    <span className="text-primary">✨</span>
                    <span className="text-foreground/90 text-lg">{opp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 rounded-2xl bg-secondary p-8 lg:p-12">
             <h3 className="text-2xl font-semibold">Connect with Me</h3>
              <div className="space-y-4">
                 <a href="mailto:annisa031104@gmail.com" className="flex items-center gap-4 group text-lg">
                    <Mail className="h-7 w-7 text-primary" />
                    <span className="group-hover:underline">annisa031104@gmail.com</span>
                 </a>
                 <a href="https://www.linkedin.com/in/annisa-ramadhona/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group text-lg">
                    <Linkedin className="h-7 w-7 text-primary" />
                    <span className="group-hover:underline">linkedin.com/in/annisa-ramadhona</span>
                 </a>
                 <a href="https://instagram.com/sastudyyy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group text-lg">
                    <Instagram className="h-7 w-7 text-primary" />
                    <span className="group-hover:underline">@sastudyyy</span>
                 </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
