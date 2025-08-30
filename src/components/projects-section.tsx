import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Hiyerd (AI Interview Platform)',
    description: 'AI-powered web platform to simulate job interviews with real-time voice interaction and detailed performance analytics.',
    github: 'https://github.com/aakashbh1/Hiyerd',
    liveDemo: 'https://hiyerd.vercel.app/',
  },
  {
    title: 'Learnify (Ed Tech Platform)',
    description: 'A full-fledged MERN stack EdTech platform with course purchasing, progress tracking, and real-time chat.',
    github: 'https://github.com/aakashbh1/Learnify',
    liveDemo: 'https://learnifyedtech.vercel.app/',
  },
  {
    title: 'Startup Idea Validator',
    description: 'An AI-powered tool to validate startup ideas by providing feedback and market analysis.',
    github: 'https://github.com/aakashbh1/startup-idea-validator',
    liveDemo: 'https://startup-idea-validator.vercel.app/',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline">Projects</h2>
          <p className="text-muted-foreground mt-2">A selection of my recent work.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col bg-card hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription className="pt-2 h-20">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <CardFooter className="flex justify-start gap-4">
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                {project.liveDemo && (
                  <Button asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
