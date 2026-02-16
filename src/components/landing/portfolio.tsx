'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import { content } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, ExternalLink } from 'lucide-react';
import TitleTypingAnimation from '@/components/ui/title-typing-animation';

export default function Portfolio() {
  const { language } = useLanguage();
  const portfolioContent = content[language].portfolio;

  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section id="portofolio" className="w-full py-12 md:py-24 lg:py-32" style={{backgroundImage: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(345, 100%, 97%) 100%)'}}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <TitleTypingAnimation text={portfolioContent.title} className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl text-foreground" />
        </div>
        
        <Tabs defaultValue="teaching" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto bg-muted rounded-full p-1 h-12">
            <TabsTrigger 
              value="teaching" 
              className="relative rounded-full data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-lg transition-all duration-300 py-2.5 text-base hover:scale-105 active:scale-95 focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-ring"
            >
              {portfolioContent.teaching.title}
            </TabsTrigger>
            <TabsTrigger 
              value="leadership"
              className="relative rounded-full data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-lg transition-all duration-300 py-2.5 text-base hover:scale-105 active:scale-95 focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-ring"
            >
              {portfolioContent.leadership.title}
            </TabsTrigger>
            <TabsTrigger 
              value="writing"
              className="relative rounded-full data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-lg transition-all duration-300 py-2.5 text-base hover:scale-105 active:scale-95 focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-ring"
            >
              {portfolioContent.writing.title}
            </TabsTrigger>
          </TabsList>

          <div className="relative mt-12 min-h-[65vh] overflow-hidden">
            <TabsContent 
              value="teaching" 
              className="w-full absolute top-0 transition-all duration-400 ease-in-out data-[state=inactive]:opacity-0 data-[state=inactive]:-translate-x-4 data-[state=active]:opacity-100 data-[state=active]:translate-x-0"
              forceMount
            >
              <div className="mx-auto max-w-5xl">
                <Accordion type="single" collapsible className="w-full space-y-6">
                  {portfolioContent.teaching.items.map((item, index) => {
                    const image = getImage(item.image);
                    return (
                      <AccordionItem value={`item-${index}`} key={index} className="bg-card border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                        <div className="p-6">
                          <div className="flex flex-col md:flex-row gap-6 w-full items-start">
                            <div className="w-full md:flex-1 space-y-2 text-left">
                              <h3 className="font-serif text-xl font-bold text-foreground leading-tight">{item.title}</h3>
                              <p className="text-sm text-muted-foreground">{item.institution}</p>
                              <p className="text-sm text-foreground/80 pt-2">{item.description}</p>
                              <div className="flex flex-wrap gap-2 pt-2">
                                {item.tags.map(tag => (
                                  <Badge key={tag} className="font-normal text-xs bg-primary/10 border border-primary/20 text-primary-foreground hover:bg-primary/20">{tag}</Badge>
                                ))}
                              </div>
                            </div>
                            {image && (
                              <div className="w-full md:w-2/5 md:max-w-sm aspect-[4/3] overflow-hidden rounded-lg shrink-0 order-first md:order-last">
                                <Image
                                  src={image.imageUrl}
                                  alt={item.title}
                                  width={400}
                                  height={300}
                                  className="object-cover w-full h-full"
                                  data-ai-hint={image.imageHint}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <AccordionTrigger className="w-full flex justify-center items-center gap-2 py-3 text-sm font-medium text-primary bg-primary/5 hover:bg-primary/10 hover:no-underline border-t !justify-center">
                            {portfolioContent.viewDetails}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="px-6 pb-6">
                             <div className="border-t pt-4">
                                <p className="text-base text-foreground/90 leading-relaxed">{item.fullDescription}</p>
                             </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </TabsContent>
            
            <TabsContent 
              value="leadership" 
              className="w-full absolute top-0 transition-all duration-400 ease-in-out data-[state=inactive]:opacity-0 data-[state=inactive]:translate-x-4 data-[state=active]:opacity-100 data-[state=active]:translate-x-0"
              forceMount
            >
               <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                  {portfolioContent.leadership.items.map((item, index) => {
                    const image = getImage(item.image);
                    return (
                      <Card key={index} className="relative group overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/10 hover:-translate-y-1 flex flex-col sm:flex-row items-center p-0">
                         <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         {image && (
                           <div className="w-full sm:w-2/5 aspect-[4/3] sm:aspect-square overflow-hidden shrink-0">
                             <Image
                               src={image.imageUrl}
                               alt={item.title}
                               width={300}
                               height={300}
                               className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                               data-ai-hint={image.imageHint}
                             />
                           </div>
                         )}
                         <div className="p-6 flex flex-col justify-center">
                           <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
                           <p className="text-sm text-muted-foreground mb-2">{item.organization}</p>
                           <p className="text-sm text-foreground/80 line-clamp-3">{item.description}</p>
                           {item.impact && (
                             <div className="flex items-center gap-2 text-sm text-primary mt-3">
                               <TrendingUp className="h-4 w-4" />
                               <span className="font-medium">{language === 'id' ? 'Dampak' : 'Impact'}:</span>
                               <span>{item.impact}</span>
                             </div>
                           )}
                         </div>
                      </Card>
                    );
                  })}
                </div>
            </TabsContent>

            <TabsContent 
              value="writing" 
              className="w-full absolute top-0 transition-all duration-400 ease-in-out data-[state=inactive]:opacity-0 data-[state=inactive]:-translate-x-4 data-[state=active]:opacity-100 data-[state=active]:translate-x-0"
              forceMount
            >
              <div className="mx-auto max-w-4xl">
                <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                  {portfolioContent.writing.categories.map((category, catIndex) => (
                    <AccordionItem value={`item-${catIndex}`} key={catIndex} className="border-b-0 mb-4 bg-card rounded-xl shadow-sm">
                      <AccordionTrigger className="font-serif text-xl font-semibold hover:no-underline rounded-lg p-6">
                        {category.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-8 px-6 pb-6">
                          {category.items.map((item, itemIndex) => {
                            const image = getImage(item.image);
                            return (
                              <div key={itemIndex} className="flex items-start gap-6 group pt-6 border-t first:pt-0 first:border-t-0">
                                {image && (
                                  <div className="w-24 h-24 shrink-0 overflow-hidden rounded-md">
                                    <Image
                                      src={image.imageUrl}
                                      alt={item.title}
                                      width={100}
                                      height={100}
                                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                      data-ai-hint={image.imageHint}
                                    />
                                  </div>
                                )}
                                <div className="flex-grow">
                                  <h4 className="font-serif text-lg font-bold text-foreground">{item.title}</h4>
                                  <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                                  <p className="text-sm text-foreground/80 mb-3 line-clamp-2">{item.description}</p>
                                  {item.link && (
                                      <Link href={item.link} target="_blank" className="relative text-sm font-medium text-primary inline-flex items-center gap-1.5 group/link">
                                        <span>{language === 'id' ? 'Baca Selengkapnya' : 'Read More'}</span>
                                        <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                        <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover/link:w-full"></span>
                                      </Link>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
