import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { BookOpenCheck, Globe, FileText, Lightbulb, Smartphone } from 'lucide-react';

const portfolioItems = [
  { 
    icon: BookOpenCheck,
    title: '📚 Penelitian & Akademik', 
    description: 'Pengembangan pembelajaran berbasis PMRI dan pemodelan matematika untuk meningkatkan kemampuan berpikir kritis siswa pada materi geometri dan SPLDV.',
    symbol: 'Δ' 
  },
  { 
    icon: Globe,
    title: '🌏 SEA Teacher Experience – Thailand', 
    description: 'Mengajar di sekolah internasional di Lampang, Thailand, dengan pendekatan pembelajaran kontekstual dan interaktif.',
    symbol: '∫'
  },
  { 
    icon: FileText,
    title: '📝 Karya Tulis Ilmiah', 
    description: 'Paper nasional bertema Trash to Cash sebagai Strategi Menghadapi Resesi yang meraih Best Paper dan Juara 1 tingkat nasional.',
    symbol: 'π'
  },
  { 
    icon: Lightbulb,
    title: '🍡 Edu-Entrepreneur Project – MOCHI-LORR', 
    description: 'Inovasi produk mochi berbasis ekstrak labu dan bahan fungsional sebagai proyek kewirausahaan pendidikan.',
    symbol: 'Σ'
  },
  { 
    icon: Smartphone,
    title: '🎮 Educational App Concept', 
    description: 'Perancangan aplikasi pembelajaran matematika berbasis game dan augmented reality untuk visualisasi bangun ruang 3D.',
    symbol: '∛'
  },
];

export default function Portfolio() {
  return (
    <section id="portofolio" className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <div className="flex items-center gap-4 justify-center">
              <div className="h-px w-16 bg-primary"></div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Portofolio</h2>
              <div className="h-px w-16 bg-primary"></div>
          </div>
          <p className="mt-4 text-foreground/80 md:text-xl/relaxed">
            Berikut adalah beberapa proyek dan pengalaman yang telah saya kerjakan.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {portfolioItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="relative group flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl border border-primary/20 transition-all duration-300 hover:bg-secondary hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <div className="absolute top-4 right-4 text-primary/20 text-2xl font-mono group-hover:text-primary/50 transition-colors">
                      {item.symbol}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 font-headline">{item.title}</CardTitle>
                    <CardDescription className="text-base text-foreground/80">{item.description}</CardDescription>
                  </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
