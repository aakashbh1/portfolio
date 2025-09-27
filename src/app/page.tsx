import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, User, Briefcase } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
      </main>
      <Footer />
    </div>
  );
}
