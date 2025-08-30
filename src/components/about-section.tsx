import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ResumeViewer from './resume-viewer';

export default function AboutSection() {
  const resumeUrl = 'https://raw.githubusercontent.com/aakashbh1/resume/main/Aakash_Bhargava_Horizontal.pdf';
  const downloadUrl = 'https://raw.githubusercontent.com/aakashbh1/resume/main/Aakash_Bhargava_Horizontal.pdf';

  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden shadow-2xl shadow-primary/20">
            <Image
              src="https://raw.githubusercontent.com/aakashbh1/resume/main/239697909_392463379423409_72035763290440210_n.jpg"
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
             <div className="mt-8 flex gap-4 justify-center md:justify-start">
               <ResumeViewer pdfUrl={resumeUrl}>
                 <Button size="lg">View Resume</Button>
               </ResumeViewer>
              <Button size="lg" variant="secondary" asChild>
                <a href={downloadUrl} download="Aakash_Bhargava_Resume.pdf">Download Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
