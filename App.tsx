
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Side Navigation Indicators (Architectural Style) */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 z-50 text-[10px] uppercase tracking-widest text-gray-400">
        <span className="vertical-text">Lee Chae Young</span>
        <div className="w-[1px] h-20 bg-gray-200 mx-auto"></div>
        <span className="vertical-text">Patissier Portfolio</span>
      </div>

      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-24 lg:py-40">
          <About />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="skills" className="bg-stone-50">
          <SkillsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
