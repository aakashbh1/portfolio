import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Twitter, Instagram, Youtube, BookOpen, BrainCircuit, Linkedin, Sparkles, Music, Dumbbell } from 'lucide-react';

const socialLinks = [
    { name: 'Threads', icon: () => <span className="font-bold text-xl">@</span>, url: 'https://www.threads.com/@aakash.bhargavaa' },
    { name: 'X / Twitter', icon: Twitter, url: 'https://x.com/aakashbhargavaa' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/aakash.bhargavaa/' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/aakashbh1/' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@aakash.bhargava' },
]

const hobbies = [
    { name: 'Reading', icon: BookOpen, description: 'I mainly read books about self-development, finance, business, and science.'},
    { name: 'AI Exploration', icon: BrainCircuit, description: 'Diving deep into the latest AI trends and building fun projects.'},
    { name: 'Music', icon: Music, description: 'Listening to a wide variety of music and learning to play the guitar.'},
    { name: 'Fitness', icon: Dumbbell, description: 'Staying active with running, gym sessions, and mobility work.' },
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
                        <CardTitle className="font-headline flex items-center gap-3">
                            <Sparkles className="h-8 w-8 text-primary" />
                            Currently Building: SLLAIGHT
                        </CardTitle>
                        <CardDescription>An AI-driven automation agency I'm founding.</CardDescription>
                    </CardHeader>
                     <CardContent className="space-y-4 text-muted-foreground">
                       <p>
                        SLLAIGHT (Systems Leveraging Logic and Artificial Intelligence for Generating Hyperautomation Tools) is an AI-driven automation agency focused on building intelligent systems, SaaS tools, and solutions for businesses. Our mission is to help companies save time, optimize operations, and scale efficiently by leveraging cutting-edge AI technologies.
                       </p>
                       <p>
                        From custom AI automation tools to intelligent workflow systems, SLLAIGHT empowers businesses to streamline processes, reduce manual effort, and make smarter data-driven decisions.
                       </p>
                       <Button asChild>
                            <a href="http://www.sllaight.com" target="_blank" rel="noopener noreferrer">
                                Learn More
                            </a>
                        </Button>
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

        <section id="newsletter" className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline">My Newsletter</h2>
              <p className="text-muted-foreground mt-2">Subscribe to get my latest thoughts on AI, tech, and productivity.</p>
            </div>
            <div className="max-w-2xl mx-auto">
               <iframe 
                  src="https://aakashbhargava.substack.com/embed" 
                  className="w-full h-80 bg-white rounded-md"
                  style={{border: "1px solid #EEE"}}
                  frameBorder="0" 
                  scrolling="no">
              </iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
