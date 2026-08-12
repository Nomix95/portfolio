import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Nouman Arif — Full-Stack Developer',
  description: 'Full-Stack Developer specializing in AI, web development, WordPress, and digital content creation. UET Gujranwala BSCS Student.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
