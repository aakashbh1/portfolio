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
    title: 'AI-Powered Chat Assistant',
    description: 'Built an AI chatbot using Python and OpenAI APIs, deployed on AWS Lambda with a serverless architecture.',
    github: 'https://github.com',
    liveDemo: null,
  },
  {
    title: 'Task Manager App',
    description: 'Full-stack task manager built with Spring Boot backend and a responsive React frontend for seamless user experience.',
    github: 'https://github.com',
    liveDemo: 'https://example.com',
  },
  {
    title: 'Portfolio Pro Website',
    description: 'This personal portfolio site, built with Next.js and Tailwind CSS, showcasing my work, skills, and professional journey.',
    github: 'https://github.com',
    liveDemo: '#',
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
