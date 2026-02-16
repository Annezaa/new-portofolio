import { Award, BookUser, Medal, Trophy } from 'lucide-react';

const achievements = [
  { icon: Trophy, text: '1st Place National Scientific Writing Competition' },
  { icon: Medal, text: 'Silver Medal & Favorite Video – Essay Idea Fest Yogyakarta' },
  { icon: BookUser, text: 'Penulis “Antologi Esai: Bandung Sejuta Cerita”' },
  { icon: Award, text: 'Finalis / Mawapres FKIP UNSRI 2025' },
];

export default function About() {
  return (
    <section id="tentang-saya" className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tentang Saya</h2>
          <p className="text-foreground/80 md:text-xl/relaxed">
            Saya adalah mahasiswa Pendidikan Matematika FKIP Universitas Sriwijaya yang aktif dalam dunia pendidikan, kepenulisan, dan inovasi pembelajaran.
          </p>
          <p className="text-foreground/80 md:text-xl/relaxed">
            Berpengalaman sebagai SEA Teacher di Lampang, Thailand, saya memiliki pengalaman mengajar lintas budaya dan merancang pembelajaran bermakna berbasis konteks nyata.
          </p>
          <p className="text-foreground/70">
            Saya percaya bahwa kreativitas matematika tidak memiliki batas.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold">Pencapaian</h3>
          <ul className="space-y-4">
            {achievements.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="flex-1 pt-1 text-foreground/90">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
