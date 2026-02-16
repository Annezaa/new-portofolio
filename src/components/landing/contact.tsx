'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import { content } from '@/lib/content';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useMemo } from 'react';
import TitleTypingAnimation from '@/components/ui/title-typing-animation';

export default function Contact() {
  const { language } = useLanguage();
  const contactContent = content[language].contact;
  const footerContent = content[language].footer;
  const { toast } = useToast();

  const formSchema = useMemo(() => {
    return z.object({
      name: z.string().min(2, { message: contactContent.form.validation.nameMin }),
      email: z.string().email({ message: contactContent.form.validation.invalidEmail }),
      message: z.string().min(10, { message: contactContent.form.validation.messageMin }),
    });
  }, [contactContent]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    form.reset();
  }, [language, form]);


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the form data to a server
    toast({
        title: contactContent.form.successTitle,
        description: contactContent.form.successDescription,
    });
    form.reset();
  }

  return (
    <section id="kontak" className="relative w-full overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl p-8 md:p-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl shadow-2xl shadow-primary/10">
          <div className="mx-auto max-w-3xl text-center">
            <TitleTypingAnimation text={contactContent.title} className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl" />
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              {contactContent.subtitle}
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">{contactContent.form.name}</FormLabel>
                      <FormControl>
                        <Input placeholder={contactContent.form.namePlaceholder} {...field} className="bg-card placeholder:text-placeholder" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">{contactContent.form.email}</FormLabel>
                      <FormControl>
                        <Input placeholder={contactContent.form.emailPlaceholder} {...field} className="bg-card placeholder:text-placeholder" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">{contactContent.form.message}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={contactContent.form.messagePlaceholder} rows={5} className="resize-y bg-card placeholder:text-placeholder" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-center pt-4">
                  <Button type="submit" size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                    {contactContent.button}
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          <div className="mx-auto max-w-3xl text-center mt-16">
            <h3 className="text-xl font-semibold text-foreground">{contactContent.connectTitle}</h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <Link href={`mailto:${contactContent.emailAddress}`} className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span>{contactContent.emailAddress}</span>
              </Link>
              <Link href={footerContent.linkedin} target="_blank" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span>{contactContent.linkedinDisplay}</span>
              </Link>
              <Link href={footerContent.instagram} target="_blank" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span>{footerContent.instagramHandle}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
