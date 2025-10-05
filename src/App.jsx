import React, { useState, useEffect } from 'react';
import ArticlesPage from './ArticlesPage';
import ProjectsPage from './ProjectsPage';

// Starfield Background Component
const Starfield = () => {
  const stars = Array.from({ length: 500 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.7 + 0.3,
    delay: Math.random() * 3
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: '4s'
          }}
        />
      ))}
    </div>
  );
};

// Navigation Header Component
const Header = ({ activeSection, setActiveSection }) => {
  const [searchFocused, setSearchFocused] = useState(false);
  
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'articles', label: 'Articles and Papers' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'resume', label: 'Resume' }
  ];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d1117]/90 backdrop-blur-xl border-b border-[#30363d]/50">
      <nav className="max-w-[95%] mx-auto px-8 py-4 flex items-center justify-between">
        <ul className="flex items-center gap-6">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`text-[16px] font-normal transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-[#7d8590] hover:text-white'
                }`}
                style={{ fontFamily: 'Ubuntu, sans-serif' }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        
        <div className={`relative transition-all duration-300 ${searchFocused ? 'w-80' : 'w-72'}`}>
          <input
            type="text"
            placeholder="Search or jump to..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="w-full px-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-md text-white text-sm placeholder-[#7d8590] focus:border-[#58a6ff] focus:outline-none transition-all"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7d8590] text-xs">/</span>
        </div>
      </nav>
    </header>
  );
};

const FloatingDecorations = () => {
  const [scrollRotation, setScrollRotation] = React.useState(0);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [shouldAnimate, setShouldAnimate] = React.useState(false);
  const [cycleRotation, setCycleRotation] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);   // enables transitions
      setTimeout(() => setIsLoaded(true), 100); // now slide in
    }, 10);
    return () => clearTimeout(timer);
  }, []);


  // Rotation cycle animation (0° -> target -> 0° -> repeat)
  React.useEffect(() => {
    if (!isLoaded) return;

    const animateCycle = () => {
      const duration = 4000; // 4 seconds per cycle
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = (elapsed % duration) / duration;

        if (progress < 0.5) {
          // First half: 0° -> 100% of target angle
          setCycleRotation(progress * 2);
        } else {
          // Second half: 100% -> 0°
          setCycleRotation(2 - progress * 2);
        }

        requestAnimationFrame(animate);
      };

      animate();
    };

    animateCycle();
  }, [isLoaded]);

  // Scroll-based rotation
  React.useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      
      setScrollRotation(prev => prev - scrollDelta * 0.2);
      
      // Hide when scrolled past 80vh
      if (currentScrollY > window.innerHeight * 0.8) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const decorations = [
    {
      src: 'corner1.webp',
      baseRotation: 10,
      position: { bottom: '5%', left: '15%' },
      entry: 'bottom', // comes from bottom
      exit: { bottom: '-20%', left: '10%' }
    },
    {
      src: 'corner2.webp',
      baseRotation: -10,
      position: { top: '45%', left: '2%' },
      entry: 'left', // comes from left
      exit: { top: '50%', left: '-20%' }
    },
    {
      src: 'corner3.webp',
      baseRotation: -15,
      position: { top: '15%', left: '15%' },
      entry: 'top', // comes from top
      exit: { top: '-20%', left: '20%' }
    },
    {
      src: 'corner4.webp',
      baseRotation: -10,
      position: { bottom: '5%', right: '40%' },
      entry: 'bottom', // comes from bottom
      exit: { bottom: '-20%', right: '35%' }
    },
    {
      src: 'corner5.webp',
      baseRotation: 15,
      position: { top: '15%', right: '35%' },
      entry: 'top', // comes from top
      exit: { top: '-20%', right: '30%' }
    }
  ];

  const getEntryPosition = (entry, position) => {
    switch(entry) {
      case 'top':
        return { ...position, top: '-20%' };
      case 'bottom':
        return { ...position, bottom: '-20%' };
      case 'left':
        return { ...position, left: '-20%' };
      default:
        return position;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {decorations.map((item, index) => {
        const currentRotation = item.baseRotation * cycleRotation + scrollRotation;
        const currentPosition = isLoaded 
          ? (isVisible ? item.position : item.exit)
          : getEntryPosition(item.entry, item.position);

        return (
          <img 
            key={index}
            src={item.src}
            alt="decoration"
            className="absolute w-40 h-40 object-contain opacity-80"
            style={{ 
              ...currentPosition,
              transform: `rotate(${isLoaded ? currentRotation : 0}deg)`,
              transition: shouldAnimate
                  ? (isLoaded
                      ? (isVisible 
                          ? 'all 1s ease-out'   // ✅ allow entry animation
                          : 'all 0.8s ease-out' // exit animation
                        )
                      : 'all 1.8s cubic-bezier(0.34, 1.56, 0.64, 1)' // initial pop-in
                    )
                  : 'none',
            }}
            onError={(e) => e.target.style.display = 'none'}
          />
        );
      })}
    </div>
  );
};

// Profile Section Component
const ProfileSection = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className="relative flex items-center justify-center gap-20 px-8 min-h-[calc(90vh-8rem)]">
      {/* Left: About Box with Corner Decorations */}
      <div className="relative w-[700px]">
        
        
        {/* About Box */}
        <div 
            className="relative p-8 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              boxShadow: isHovered 
                ? '0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.1), -6px 0 20px rgba(255, 255, 255, 0.8)'
                : '0 0 20px rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(255, 255, 255, 0.02), -4px 0 8px rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderLeft: isHovered ? '2px solid rgba(255, 255, 255, 0.9)' : '2px solid rgba(255, 255, 255, 0.3)'
            }}
          >
          {/* Galaxy dots inside box */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 200 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 1.5 + 0.5}px`,
                  height: `${Math.random() * 1.5 + 0.5}px`
                }}
              />
            ))}
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              About Me
            </h1>
            <p className="text-[#c9d1d9] text-base leading-relaxed" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              Your introduction text will go here. This section will contain your bio, skills, and professional summary. 
              The dark background with subtle stars creates a nice contrast for readability while maintaining the cosmic theme.
            </p>
          </div>
        </div>
      </div>
      
      {/* Right: Profile Photo with Creative Styling */}
      <div className="relative">
        {/* Tape effect on top */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#f0f0f0]/30 backdrop-blur-sm z-20"
             style={{ 
               transform: 'translateX(-50%) rotate(-2deg)',
               boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
             }} />
        
        {/* Photo container */}
        <div className="relative" style={{ transform: 'rotate(2deg)' }}>
          <img 
            src="profile.jpg"
            alt="Profile"
            className="w-64 h-80 object-cover rounded-sm"
            style={{
              boxShadow: '0 10px 40px rgba(0,0,0,0.5), 0 0 0 8px #fff, 0 0 0 9px rgba(0,0,0,0.2)'
            }}
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg width="256" height="320" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="256" height="320" fill="%23374151"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%239CA3AF" font-size="16"%3EProfile Photo%3C/text%3E%3C/svg%3E';
            }}
          />
          
          {/* Bold line accent */}
          <div className="absolute -bottom-3 -right-3 w-48 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
               style={{ transform: 'rotate(-3deg)' }} />
        </div>
      </div>
    </div>
  );
};

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0d1117]">
      {/* Radial Gradient - Moved down, dimmed */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_60%,_var(--tw-gradient-stops))] from-purple-900/25 via-[#0d1117] to-[#0d1117]" />
      
      {/* Dimmed Gradient Orbs */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/18 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/3 w-[350px] h-[350px] bg-pink-500/15 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '12s', animationDelay: '4s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
    </div>
  );
};

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section');
      const articlesSection = document.getElementById('articles-section');
      const projectsSection = document.getElementById('projects-section');
      
      if (aboutSection && articlesSection && projectsSection) {
        const aboutBottom = aboutSection.getBoundingClientRect().bottom;
        const articlesTop = articlesSection.getBoundingClientRect().top;
        const articlesBottom = articlesSection.getBoundingClientRect().bottom;
        const projectsTop = projectsSection.getBoundingClientRect().top;
        
        if (projectsTop <= window.innerHeight / 2) {
          setActiveSection('projects');
        } else if (articlesTop <= window.innerHeight / 2 && articlesBottom > window.innerHeight / 2) {
          setActiveSection('articles');
        } else if (aboutBottom > window.innerHeight / 2) {
          setActiveSection('about');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
      `}</style>
      
      <AnimatedBackground />
      <Starfield />
      <FloatingDecorations />
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        <div id="about-section" className="pt-32">
          <ProfileSection />
        </div>
        <div id="articles-section">
          <ArticlesPage />
        </div>
        <div id="projects-section">
          <ProjectsPage />
        </div>
      </main>
    </div>
  );
};

export default App;
