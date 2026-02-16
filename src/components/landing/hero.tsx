import { Button } from '@/components/ui/button';
import Link from 'next/link';

const MathSymbol = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`absolute select-none font-code text-5xl opacity-[0.06] text-foreground -z-10 ${className}`}>
    {children}
  </div>
);

const WireframeCube = () => (
    <div className="absolute top-[10%] left-[5%] w-48 h-48 opacity-20 -z-10 animate-[spin_30s_linear_infinite]">
         <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5">
            <path d="M25 35 L75 15 L100 35 L50 55 Z" />
            <path d="M50 55 L50 95" />
            <path d="M25 35 L25 75 L50 95 L100 75 L100 35" />
            <path d="M75 15 L75 55" strokeDasharray="2 2" />
            <path d="M25 75 L75 55 L100 75" strokeDasharray="2 2" />
         </svg>
    </div>
);

const SphereGrid = () => (
    <div className="absolute bottom-[5%] right-[5%] w-64 h-64 opacity-15 -z-10 animate-[spin_45s_linear_infinite_reverse]">
        <svg viewBox="0 0 100 100" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.3">
            <circle cx="50" cy="50" r="48" />
            <ellipse cx="50" cy="50" rx="48" ry="15" />
            <ellipse cx="50" cy="50" rx="48" ry="30" />
            <ellipse cx="50" cy="50" rx="15" ry="48" />
            <ellipse cx="50" cy="50" rx="30" ry="48" />
        </svg>
    </div>
);

const Pyramid = () => (
  <div className="absolute top-[55%] left-[20%] w-32 h-32 opacity-25 -z-10 animate-[spin_35s_linear_infinite]">
    <svg viewBox="0 0 100 100" fill="none" stroke="#C6A75E" strokeWidth="0.5">
      <path d="M50 20 L20 80" />
      <path d="M50 20 L80 80" />
      <path d="M50 20 L60 95" />
      <path d="M50 20 L5 95" />
      <path d="M20 80 L80 80 L60 95 L5 95 Z" strokeDasharray="2 2" />
    </svg>
  </div>
);

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 -z-20 bg-background">
        {/* Layer 2: Mathematical Textures */}
        <MathSymbol className="top-[15%] left-[20%] whitespace-pre">  ∫ f(x) dx</MathSymbol>
        <MathSymbol className="top-[50%] left-[5%]">Σ</MathSymbol>
        <MathSymbol className="bottom-[20%] right-[15%]">lim x→∞</MathSymbol>
        <MathSymbol className="top-[25%] right-[10%] whitespace-pre">{`[ a b ]
[ c d ]`}</MathSymbol>

        {/* Layer 3: Geometric Wireframes */}
        <WireframeCube />
        <SphereGrid />
        <Pyramid />
      </div>

       <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-16 text-center md:px-6">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Annisa Ramadhona
          </h1>
          <p className="font-headline text-3xl text-foreground/90 sm:text-4xl">
            Designing Meaning in Every <span className="font-serif italic">Dimension.</span>
          </p>
          <p className="text-lg text-foreground/80 md:text-xl">
            Mathematics Educator | SEA Teacher | Education Innovator
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg font-semibold transition-transform hover:scale-105">
              <Link href="#portofolio">Lihat Portofolio</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-primary bg-transparent px-8 py-6 text-lg font-semibold text-primary hover:bg-primary/10 hover:text-primary transition-transform hover:scale-105">
              <Link href="/annisa-ramadhona-cv.pdf" download>Download CV</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
