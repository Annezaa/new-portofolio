import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const portfolioItems = [
  { id: 'portfolio-1', title: 'Branding Identity', description: 'A complete branding package for a tech startup, including logo, color palette, and typography guidelines.' },
  { id: 'portfolio-2', title: 'UI/UX Redesign', description: 'Redesigning a popular e-commerce mobile app for a more intuitive and engaging user experience.' },
  { id: 'portfolio-3', title: 'Social Media Campaign', description: 'Creative content and visual strategy for a fashion brand\'s new product launch on Instagram and TikTok.' },
  { id: 'portfolio-4', title: 'Web Design Project', description: 'Designing a modern and responsive website for a creative agency, focusing on clean aesthetics and user flow.' },
];

export default function Portfolio() {
  return (
    <section id="portofolio" className="w-full bg-primary/5 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Portofolio</h2>
          <p className="mt-4 text-foreground/80 md:text-xl/relaxed">
            A selection of my work that showcases my skills and creativity.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {portfolioItems.map((item) => {
            const image = PlaceHolderImages.find(p => p.id === item.id);
            return (
              <Card key={item.id} className="overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02]">
                <CardContent className="p-0">
                  {image && (
                     <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        width={600}
                        height={400}
                        className="w-full object-cover aspect-video"
                     />
                  )}
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
