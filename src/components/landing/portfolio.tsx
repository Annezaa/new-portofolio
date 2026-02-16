'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/language-provider';
import { content } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowUpRight, ChevronDown, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Portfolio() {
  const { language } = useLanguage();
  const portfolioContent = content[language].portfolio;
  const [showAllExperience, setShowAllExperience] = useState(false);

  const displayedExperiences = showAllExperience
    ? portfolioContent.teaching.items
    : portfolioContent.teaching.items.slice(0, 4);

  return (
    <section id="portofolio" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 space-y-24">
        
        {/* Teaching & Educational Experience */}
        <div>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl text-foreground">{portfolioContent.teaching.title}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {displayedExperiences.map((item, index) => {
              const image = PlaceHolderImages.find(img => img.id === item.image);
              return (
                <Card key={index} className="group flex flex-col overflow-hidden rounded-2xl border-border/50 bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary">
                  {image && (
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-serif text-xl font-bold text-foreground">{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-foreground/80">{item.description}</p>
                  </CardContent>
                  <CardFooter className="flex-wrap gap-2 pt-4">
                    {item.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="font-normal text-xs">{tag}</Badge>
                    ))}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          {portfolioContent.teaching.items.length > 4 && (
            <div className="mt-12 text-center">
              <Button variant="outline" onClick={() => setShowAllExperience(!showAllExperience)}>
                {showAllExperience ? (language === 'id' ? 'Tampilkan Lebih Sedikit' : 'Show Less') : portfolioContent.teaching.viewAll}
                <ChevronDown className={cn("ml-2 h-4 w-4 transition-transform", showAllExperience && "rotate-180")} />
              </Button>
            </div>
          )}
        </div>

        {/* Leadership & Community Engagement */}
        <div>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl text-foreground">{portfolioContent.leadership.title}</h2>
          </div>
          <div className="mx-auto max-w-4xl space-y-12">
            {portfolioContent.leadership.items.map((item, index) => {
              const image = PlaceHolderImages.find(img => img.id === item.image);
              return(
                <Card key={index} className="overflow-hidden rounded-2xl border-border/50 bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary">
                  {image && (
                    <div className="aspect-video">
                      <Image
                        src={image.imageUrl}
                        alt={item.title}
                        width={800}
                        height={450}
                        className="object-cover w-full h-full"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.organization}</p>
                    <p className="text-sm text-foreground/80 mb-4">{item.description}</p>
                    {item.impact && (
                      <div className="flex items-center gap-2 text-sm text-primary">
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
        </div>

        {/* Publication & Writing */}
        <div>
           <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl text-foreground">{portfolioContent.writing.title}</h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="w-full">
              {portfolioContent.writing.categories.map((category, catIndex) => (
                <AccordionItem value={`item-${catIndex}`} key={catIndex}>
                  <AccordionTrigger className="font-serif text-2xl font-semibold hover:no-underline">{category.name}</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-4">
                      {category.items.map((item, itemIndex) => {
                        const image = PlaceHolderImages.find(img => img.id === item.image);
                        return (
                          <div key={itemIndex} className="flex items-start gap-6 group">
                            {image && (
                              <div className="w-20 shrink-0">
                                <Image
                                  src={image.imageUrl}
                                  alt={item.title}
                                  width={200}
                                  height={300}
                                  className="rounded-md object-cover"
                                  data-ai-hint={image.imageHint}
                                />
                              </div>
                            )}
                            <div className="flex-grow">
                              <h4 className="font-serif text-lg font-bold text-foreground">{item.title}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                              <p className="text-sm text-foreground/80 mb-2">{item.description}</p>
                              <Link href={item.link} target="_blank" className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:underline">
                                {language === 'id' ? 'Baca Selengkapnya' : 'Read More'} <ArrowUpRight className="h-4 w-4" />
                              </Link>
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
        </div>
      </div>
    </section>
  );
}
