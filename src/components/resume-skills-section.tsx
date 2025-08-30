'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { highlightSkills } from '@/ai/flows/skill-highlighter';

const skills = [
  'Java', 'Spring Boot', 'Python', 'AWS (Lambda, S3, EC2)', 'SQL / Databases', 
  'REST APIs', 'Git &amp; GitHub', 'AI / ML Basics', 'Docker', 'Kubernetes', 'Microservices'
];

const resumeText = `
John Doe
Software Engineer
(123) 456-7890 | john.doe@email.com | linkedin.com/in/johndoe | github.com/johndoe

Summary
Highly motivated Software Engineer with 3+ years of experience in designing, developing, and deploying scalable backend services and full-stack applications. Proficient in Java and the Spring Boot ecosystem, with a strong foundation in cloud computing using AWS services like Lambda, S3, and EC2. Passionate about leveraging Python for automation and exploring AI/ML concepts. Excellent problem-solver with a knack for creating efficient and robust software solutions.

Experience
Software Engineer | Tech Solutions Inc. | Jan 2021 - Present
- Developed and maintained high-performance microservices using Java and Spring Boot, serving over 1 million daily requests.
- Designed and implemented REST APIs for various client-facing applications, ensuring security and performance.
- Deployed applications on AWS using EC2 instances and managed infrastructure with Terraform.
- Utilized AWS S3 for object storage and AWS Lambda for serverless computing, reducing operational costs by 20%.
- Wrote complex SQL queries and optimized database performance for PostgreSQL.

Skills
- Languages: Java, Python, SQL
- Frameworks: Spring Boot, Hibernate
- Cloud: AWS (EC2, S3, Lambda, IAM), Docker
- Databases: PostgreSQL, MySQL, Redis
- Tools: Git, GitHub, Jenkins, Maven, Postman

Projects
AI-Powered Chat Assistant
- Built an AI chatbot using Python and OpenAI APIs, deployed on AWS Lambda.
- Implemented a serverless architecture to handle user queries efficiently.

Education
Bachelor of Science in Computer Science
State University | Graduated May 2020
`;

export default function ResumeSkillsSection() {
  const [keywords, setKeywords] = useState('');
  const [highlightedHtml, setHighlightedHtml] = useState(resumeText);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleHighlight = async () => {
    if (!keywords.trim()) {
      setHighlightedHtml(resumeText);
      return;
    }
    setIsLoading(true);
    try {
      const result = await highlightSkills({ resumeText, keywords });
      setHighlightedHtml(result.highlightedResume);
    } catch (error) {
      console.error('Error highlighting skills:', error);
      toast({
        title: 'Error',
        description: 'Failed to highlight skills. Please try again.',
        variant: 'destructive',
      });
      setHighlightedHtml(resumeText);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="resume" className="bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline">Skills &amp; Expertise</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm sm:text-base px-4 py-2 rounded-full">
              {skill}
            </Badge>
          ))}
        </div>
        
        <Separator className="my-16" />

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline">Interactive Resume</h2>
          <p className="text-muted-foreground mt-2">Enter keywords (e.g., "Java, AWS") to highlight relevant skills.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="w-full">
              <Label htmlFor="keywords-input" className="sr-only">Keywords</Label>
              <Input
                id="keywords-input"
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="Enter comma-separated keywords..."
                className="h-12 text-base"
              />
            </div>
            <Button onClick={handleHighlight} disabled={isLoading} className="h-12 px-8">
              {isLoading ? 'Highlighting...' : 'Highlight Skills'}
            </Button>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div
                className="prose prose-invert prose-sm sm:prose-base max-w-none text-foreground/90 whitespace-pre-wrap font-mono"
                dangerouslySetInnerHTML={{ __html: highlightedHtml }}
              />
            </CardContent>
          </Card>
          
          <div className="text-center mt-8 space-x-4">
            <Button size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/resume.pdf" download="John_Doe_Resume.pdf">Download Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
