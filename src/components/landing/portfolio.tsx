'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import { content } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

type TeachingItem = typeof content.en.portfolio.teaching.items[0];

export default function Portfolio() {
  const { language } = useLanguage();
  const portfolioContent = content[language].portfolio;
  
  const [selectedProject, setSelectedProject] = useState<TeachingItem | null>(null);

  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section id="portofolio" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl text-foreground">{portfolioContent.title}</h2>
        </div>
        
        <Tabs defaultValue="teaching" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto">
            <TabsTrigger value="teaching">{portfolioContent.teaching.title}</TabsTrigger>
            <TabsTrigger value="leadership">{portfolioContent.leadership.title}</TabsTrigger>
            <TabsTrigger value="writing">{portfolioContent.writing.title}</TabsTrigger>
          </TabsList>
          
          <Dialog open={!!selectedProject} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
            <DialogContent className="sm:max-w-[625px] bg-card">
              {selectedProject && (
                <>
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl">{selectedProject.title}</DialogTitle>
                    <p className="text-sm text-muted-foreground pt-1">{selectedProject.institution}</p>
                  </DialogHeader>
                  <div className="py-4 text-foreground/90">
                    <p>{selectedProject.fullDescription || selectedProject.description}</p>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

          <TabsContent value="teaching" className="pt-12 min-h-[60vh]">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {portfolioContent.teaching.items.slice(0, 3).map((item, index) => {
                const image = getImage(item.image);
                return (
                  <Card key={index} className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    {image && (
                      <div className="aspect-[4/3] overflow-hidden">
                        <Image
                          src={image.imageUrl}
                          alt={item.title}
                          width={600}
                          height={450}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="font-serif text-xl font-bold text-foreground leading-tight">{item.title}</CardTitle>
                      <p className="text-sm text-muted-foreground pt-1">{item.institution}</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-foreground/80 line-clamp-2">{item.description}</p>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-4 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="font-normal text-xs">{tag}</Badge>
                        ))}
                      </div>
                      <Button variant="link" className="p-0 h-auto text-primary" onClick={() => setSelectedProject(item)}>
                        {language === 'id' ? 'Lihat Detail' : 'View Details'}
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="leadership" className="pt-12 min-h-[60vh]">
             <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                {portfolioContent.leadership.items.map((item, index) => {
                  const image = getImage(item.image);
                  return (
                    <Card key={index} className="group overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col sm:flex-row items-center">
                      {image && (
                         <div className="w-full sm:w-2/5 aspect-video sm:aspect-square overflow-hidden shrink-0">
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

          <TabsContent value="writing" className="pt-12 min-h-[60vh]">
            <div className="mx-auto max-w-4xl">
              <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                {portfolioContent.writing.categories.map((category, catIndex) => (
                  <AccordionItem value={`item-${catIndex}`} key={catIndex}>
                    <AccordionTrigger className="font-serif text-2xl font-semibold hover:no-underline">{category.name}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-8 pt-4">
                        {category.items.map((item, itemIndex) => {
                          const image = getImage(item.image);
                          return (
                            <div key={itemIndex} className="flex items-start gap-6 group">
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
                                    <Link href={item.link} target="_blank" className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:underline">
                                    {language === 'id' ? 'Baca Selengkapnya' : 'Read More'} <ArrowUpRight className="h-4 w-4" />
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
        </Tabs>
      </div>
    </section>
  );
}
