import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontak" className="w-full bg-primary/5 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hubungi Saya</h2>
          <p className="mt-4 text-foreground/80 md:text-xl/relaxed">
            Let's create something amazing together.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-4xl">
           <Card className="rounded-2xl shadow-lg shadow-primary/10">
            <CardContent className="p-8 grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Get in Touch</h3>
                <p className="text-foreground/80">
                  I'm open to freelance opportunities, collaborations, and new connections. Feel free to send me a message or connect with me on social media.
                </p>
                <div className="space-y-4">
                   <a href="mailto:annisa.r@example.com" className="flex items-center gap-4 group">
                      <Mail className="h-6 w-6 text-primary" />
                      <span className="group-hover:underline">annisa.r@example.com</span>
                   </a>
                   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                      <Linkedin className="h-6 w-6 text-primary" />
                      <span className="group-hover:underline">linkedin.com/in/annisaramadhona</span>
                   </a>
                   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                      <Instagram className="h-6 w-6 text-primary" />
                      <span className="group-hover:underline">@annisa.designs</span>
                   </a>
                </div>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" className="min-h-[120px] bg-background" />
                </div>
                <Button type="submit" className="w-full rounded-full text-md py-6">Send Message</Button>
              </form>
            </CardContent>
           </Card>
        </div>
      </div>
    </section>
  );
}
