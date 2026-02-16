import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpenCheck, Globe, FileText, Lightbulb, Smartphone } from 'lucide-react';

const portfolioItems = [
  { 
    icon: BookOpenCheck,
    title: 'Penelitian & Akademik', 
    description: 'Pengembangan pembelajaran berbasis PMRI dan pemodelan matematika untuk meningkatkan kemampuan berpikir kritis siswa pada materi geometri dan SPLDV.' 
  },
  { 
    icon: Globe,
    title: 'SEA Teacher Experience – Thailand', 
    description: 'Mengajar di sekolah internasional di Lampang, Thailand, dengan pendekatan pembelajaran kontekstual dan interaktif.'
  },
  { 
    icon: FileText,
    title: 'Karya Tulis Ilmiah', 
    description: 'Paper nasional bertema Trash to Cash sebagai Strategi Menghadapi Resesi yang meraih Best Paper dan Juara 1 tingkat nasional.'
  },
  { 
    icon: Lightbulb,
    title: 'Edu-Entrepreneur Project – MOCHI-LORR', 
    description: 'Inovasi produk mochi berbasis ekstrak labu dan bahan fungsional sebagai proyek kewirausahaan pendidikan.'
  },
  { 
    icon: Smartphone,
    title: 'Educational App Concept', 
    description: 'Perancangan aplikasi pembelajaran matematika berbasis game dan augmented reality untuk visualisasi bangun ruang 3D.'
  },
];

export default function Portfolio() {
  return (
    <section id="portofolio" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Portofolio</h2>
          <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
            Berikut adalah beberapa proyek dan pengalaman yang telah saya kerjakan.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => {
            const Icon = item.icon;
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
