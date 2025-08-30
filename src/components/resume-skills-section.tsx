'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const skills = [
  'AI/ML',
  'Vector Databases',
  'RAG',
  'Fine-Tuning',
  'React',
  'React Native',
  'TypeScript',
  'JavaScript',
  'Python',
  'Java',
  'Spring Boot',
  'AWS',
  'Docker',
  'Git & GitHub',
  'CI/CD',
];

export default function ResumeSkillsSection() {
  return (
    <section id="resume" className="bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline">Skills & Expertise</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm sm:text-base px-4 py-2 rounded-full">
              {skill}
            </Badge>
          ))}
        </div>
        
        <Separator className="my-12" />

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline">My Resume</h2>
          <p className="text-muted-foreground mt-2">
            Check out my professional experience and qualifications.
          </p>
           <div className="text-center mt-8 space-x-4">
            <Button size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/resume.pdf" download="Akash_Vargas_Resume.pdf">Download Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
