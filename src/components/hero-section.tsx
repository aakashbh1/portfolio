import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-dvh flex items-center justify-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="z-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Hi, I’m John Doe 👋
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Software Engineer | Java | Spring Boot | Python | AWS | AI Enthusiast
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
          </Button>
          <Button variant="outline" size="icon" className="h-12 w-12" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="h-12 w-12" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
