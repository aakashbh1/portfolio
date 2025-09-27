import Header from '@/components/header';
import AboutSection from '@/components/about-section';
import ResumeSkillsSection from '@/components/resume-skills-section';
import ProjectsSection from '@/components/projects-section';
import Footer from '@/components/footer';

export default function ProfessionalPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <AboutSection />
        <ResumeSkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
