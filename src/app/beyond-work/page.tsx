import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Twitter, Instagram, Youtube, BookOpen, BrainCircuit, Gamepad2 } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
    { name: 'Twitter / X', icon: Twitter, url: 'https://twitter.com/aakashbh1' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/aakash.b_/' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/channel/UC-qr_eEZ5h1D6G-h-a5g_sw' },
]

const hobbies = [
    { name: 'Reading', icon: BookOpen, description: 'Exploring new worlds through books, from sci-fi to non-fiction.'},
    { name: 'AI Exploration', icon: BrainCircuit, description: 'Diving deep into the latest AI trends and building fun projects.'},
    { name: 'Gaming', icon: Gamepad2, description: 'Unwinding with strategy games and immersive RPGs.'},
]

export default function BeyondWorkPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-headline">Beyond the Code</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              A glimpse into my life outside of engineering—my hobbies, what I'm currently learning, and where you can find me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            <div className="space-y-12">
                <Card>
                    <CardHeader>
                        <CardTitle>Currently...</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>I'm currently fascinated by the world of Large Language Models and their real-world applications. I'm spending my free time learning how to fine-tune models and build agents that can perform complex tasks.</p>
                        <p>I'm also exploring creative writing and learning how to play the guitar!</p>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle>Hobbies & Interests</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                       {hobbies.map(hobby => (
                           <div key={hobby.name} className="flex items-start gap-4">
                               <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <hobby.icon className="h-6 w-6" />
                               </div>
                               <div>
                                   <h3 className="font-semibold text-lg">{hobby.name}</h3>
                                   <p className="text-muted-foreground">{hobby.description}</p>
                               </div>
                           </div>
                       ))}
                    </CardContent>
                </Card>
            </div>
            
            <div className="space-y-12">
                <Card>
                    <CardHeader>
                        <CardTitle>Latest on YouTube</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video rounded-lg overflow-hidden border">
                             <iframe 
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/videoseries?list=UU-qr_eEZ5h1D6G-h-a5g_sw" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                             </iframe>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Connect with Me</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-4">
                       {socialLinks.map(link => (
                           <Button key={link.name} variant="outline" asChild className="justify-start">
                               <a href={link.url} target="_blank" rel="noopener noreferrer">
                                   <link.icon className="mr-3 h-5 w-5" />
                                   {link.name}
                               </a>
                           </Button>
                       ))}
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
