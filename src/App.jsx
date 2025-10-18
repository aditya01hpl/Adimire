import React, { useState, useEffect } from 'react';
import HeroSection, { MinimalHeader, SocialIcons, ScrollIndicator } from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsPage from './ProjectsPage';
import ExperiencePage from './ExperiencePage';
import ArticlesPage from './ArticlesPage';
import ContactPage from './ContactPage';  // Add this line

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      const aboutSection = document.getElementById('about-section');
      const projectsSection = document.getElementById('projects-section');
      const experienceSection = document.getElementById('experience-section');
      const articlesSection = document.getElementById('articles-section');
      const contactSection = document.getElementById('contact-section');  // Add this line
      
      if (heroSection && aboutSection && projectsSection && experienceSection && articlesSection && contactSection) {  // Add contactSection here
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const aboutTop = aboutSection.getBoundingClientRect().top;
        const aboutBottom = aboutSection.getBoundingClientRect().bottom;
        const projectsTop = projectsSection.getBoundingClientRect().top;
        const projectsBottom = projectsSection.getBoundingClientRect().bottom;
        const experienceTop = experienceSection.getBoundingClientRect().top;
        const experienceBottom = experienceSection.getBoundingClientRect().bottom;
        const articlesTop = articlesSection.getBoundingClientRect().top;
        const articlesBottom = articlesSection.getBoundingClientRect().bottom;
        const contactTop = contactSection.getBoundingClientRect().top;  // Add this line
        const contactBottom = contactSection.getBoundingClientRect().bottom;  // Add this line
        
        if (contactTop <= window.innerHeight / 2 && contactBottom > window.innerHeight / 2) {  // Add this
          setActiveSection('contact');
        } else if (articlesTop <= window.innerHeight / 2 && articlesBottom > window.innerHeight / 2) {
          setActiveSection('blog');
        } else if (experienceTop <= window.innerHeight / 2 && experienceBottom > window.innerHeight / 2) {
          setActiveSection('experience');
        } else if (projectsTop <= window.innerHeight / 2 && projectsBottom > window.innerHeight / 2) {
          setActiveSection('works');
        } else if (aboutTop <= window.innerHeight / 2 && aboutBottom > window.innerHeight / 2) {
          setActiveSection('about');
        } else if (heroBottom > window.innerHeight / 2) {
          setActiveSection('home');
        }
      }
    };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&display=swap');
      `}</style>
      
      <MinimalHeader activeSection={activeSection} setActiveSection={setActiveSection} />
      <SocialIcons />
      <ScrollIndicator />
      
      <main className="relative">
        <div id="hero-section">
          <HeroSection />
        </div>
        <div id="about-section">
          <AboutSection />
        </div>
        <div id="projects-section">
          <ProjectsPage />
        </div>
        <div id="experience-section">
          <ExperiencePage />
        </div>
        <div id="articles-section">
          <ArticlesPage />
        </div>
        <div id="contact-section">
          <ContactPage />
        </div>
      </main>
    </div>
  );
};

export default App;