import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden shadow-2xl shadow-primary/20">
            <Image
              src="https://picsum.photos/600/600"
              alt="Aakash Bhargava"
              width={600}
              height={600}
              className="object-cover"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4">About Me</h2>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg">
              <p>
                I am a passionate Software Engineer with experience in building scalable applications and services using Java (Spring Boot), Python, and cloud technologies like AWS.
              </p>
              <p>
                I am deeply curious about AI and its potential to transform businesses and workflows. I thrive on problem-solving, learning new technologies, and building impactful solutions.
              </p>
            </div>
            <Button size="lg" variant="secondary" className="mt-8" asChild>
              <a href="https://github.com/aakashbh1/resume/raw/main/Aakash_Bhargava_Horizontal.pdf" download="Aakash_Bhargava_Resume.pdf">Download Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
