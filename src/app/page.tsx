import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import Portfolio from '@/components/landing/portfolio';
import Skills from '@/components/landing/skills';
import Contact from '@/components/landing/contact';
import Footer from '@/components/landing/footer';
import PageMetadata from '@/components/page-metadata';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden text-foreground">
      <PageMetadata />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
