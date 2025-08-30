'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const skills = {
  'AI/ML': ['RAG', 'Vector DBs', 'Fine-Tuning'],
  Backend: ['Java', 'Spring Boot', 'Python'],
  Databases: ['SQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'NoSQL'],
  'DevOps/Cloud': ['AWS', 'Docker', 'CI/CD', 'Git & GitHub'],
  'Frontend/MERN': ['React', 'React Native', 'JS', 'TS', 'Node.js', 'Express'],
};

const orderedCategories = ['AI/ML', 'Backend', 'Databases', 'DevOps/Cloud', 'Frontend/MERN'];

const allSkills = orderedCategories.flatMap(category =>
  skills[category as keyof typeof skills].map(skill => ({
    name: skill,
    category: category,
  }))
);

const SkillCard = ({ skill }: { skill: { name: string; category: string } }) => (
  <div className="group relative flex h-24 w-48 items-center justify-center overflow-hidden rounded-xl border border-border/20 bg-card shadow-sm transition-all duration-300 hover:border-primary hover:shadow-primary/10">
    <div className="z-10 text-center">
      <p className="font-bold text-lg text-foreground">{skill.name}</p>
      <p className="text-xs text-muted-foreground">{skill.category}</p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
    <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-primary/10 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-150" />
  </div>
);

const SkillsMarquee = () => {
  const extendedSkills = [...allSkills, ...allSkills]; // Duplicate for seamless looping

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div className="flex animate-[marquee_60s_linear_infinite] py-4">
        {extendedSkills.map((skill, index) => (
          <div key={index} className="mx-4 flex-shrink-0">
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default function ResumeSkillsSection() {
  return (
    <section id="resume" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline">Skills & Expertise</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A showcase of my technical abilities, from front-end to back-end and beyond.
          </p>
        </div>
      </div>

      <SkillsMarquee />

      <div className="container mx-auto px-4">
        <Separator className="my-16" />
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
              <a href="/resume.pdf" download="Aakash_Bhargava_Resume.pdf">Download Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
