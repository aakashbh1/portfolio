import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, User, Briefcase, Code, Eye, Sparkles } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center px-4 overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
          <div className="z-10">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 dark:from-foreground/80 dark:to-foreground py-4">
              Hi, I’m Aakash Bhargava 👋
            </h1>
            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A passionate Software Engineer transforming ideas into impactful solutions.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/professional">
                  <Briefcase className="mr-2" /> Explore My Work
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                <Link href="/beyond-work">
                  <User className="mr-2" /> Know Me Beyond Work
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="snapshot" className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20 hover:border-primary transition-all">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-3">
                    <Code className="h-8 w-8 text-primary" />
                    Professional Snapshot
                  </CardTitle>
                  <CardDescription>A glimpse into my technical world.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    As a Software Engineer, I specialize in building scalable applications and services, with a deep curiosity for AI and its potential to transform businesses.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href="/professional">
                      See more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-primary/20 hover:border-primary transition-all">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-3">
                    <Eye className="h-8 w-8 text-primary" />
                    Beyond Work
                  </CardTitle>
                  <CardDescription>Who I am outside of the code.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I'm a curious mind who enjoys exploring AI trends, creating content, reading, and unwinding with strategy games.
                  </p>
                </CardContent>
                <CardFooter>
                   <Button asChild variant="link" className="p-0 h-auto">
                    <Link href="/beyond-work">
                      See more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        <section id="currently-working-on" className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold font-headline">Currently Building & Founding</h2>
                </div>
                <Card className="max-w-4xl mx-auto border-primary/20 hover:border-primary transition-all">
                    <CardHeader>
                         <CardTitle className="font-headline flex items-center gap-3">
                            <Sparkles className="h-8 w-8 text-primary" />
                            SLLAIGHT
                        </CardTitle>
                        <CardDescription>An AI-driven automation agency focused on building intelligent systems, SaaS tools, and solutions for businesses.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                           SLLAIGHT (Systems Leveraging Logic and Artificial Intelligence for Generating Hyperautomation Tools) is dedicated to helping companies save time, optimize operations, and scale efficiently by leveraging cutting-edge AI technologies.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild>
                            <a href="https://www.sllaight.com" target="_blank" rel="noopener noreferrer">
                                Visit SLLAIGHT
                            </a>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
