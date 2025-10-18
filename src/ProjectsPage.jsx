import React, { useEffect, useRef, useState } from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Sparrows of Luck",
      type: "Gaming",
      description: "Mobile gaming application with engaging gameplay mechanics and stunning visuals. Built for iOS and Android platforms with seamless cross-platform experience.",
      image: "project1.jpg",
      tags: ["Mobile", "React Native", "Gaming"],
      link: "#"
    },
    {
      id: 2,
      title: "Radio Rocks",
      type: "Music Platform",
      description: "Interactive music voting platform allowing users to vote for favorite songs. Real-time audio streaming with social engagement features and playlist curation.",
      image: "project2.jpg",
      tags: ["Web App", "Streaming", "UI/UX"],
      link: "#"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      type: "Retail",
      description: "Full-featured online marketplace with inventory management, payment processing, and customer analytics. Scalable architecture handling thousands of transactions.",
      image: "project3.jpg",
      tags: ["E-Commerce", "Backend", "Cloud"],
      link: "#"
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      type: "Data Visualization",
      description: "Real-time analytics platform with interactive charts and custom reporting. Enterprise-grade data processing with intuitive user interface.",
      image: "project4.jpg",
      tags: ["Dashboard", "React", "D3.js"],
      link: "#"
    }
  ];

  const scrollContainerRef = useRef(null);

  return (
    <div className="h-screen bg-[#0F0F0F] text-[#F5F5F5] flex items-start px-8 py-8 overflow-hidden">
      
      {/* Max-width container with flex layout */}
      <div className="max-w-7xl mx-auto w-full flex items-start gap-12 h-full">
        
        {/* Left Label: "WORK /" */}
        <div className="pt-1.5"> 
          <p 
            className="text-m font-semibold text-[#8A8A8A] tracking-[0.2em] uppercase whitespace-nowrap"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            WORK /
          </p>
        </div>

        {/* Main Content Area - Scrollable */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 h-full overflow-y-auto snap-y snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            .flex-1::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalProjects={projects.length}
            />
          ))}

          {/* All Projects Button at End */}
          <div className="snap-start flex items-center justify-center h-[10vh]">
            <AllProjectsButton />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, totalProjects }) => {
  
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const typingRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    if (!isHovered) {
      setTypedText('');
      return;
    }

    const fullText = project.description;
    let currentIndex = 0;

    const typeNextChar = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;

        const char = fullText[currentIndex - 1];
        const delay = char === '.' || char === ',' ? 700 : 15 + Math.random() * 20;

        typingRef.current = setTimeout(typeNextChar, delay);
      }
    };

    setTimeout(typeNextChar, 500);

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [isHovered, project.description]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const aspectRatio = 1275 / 675;
  const cardWidth = 650;
  const cardHeight = cardWidth / aspectRatio;
  const shiftAmount = 200;

  return (
    <div
      ref={cardRef}
      className="snap-center flex items-center justify-center h-full min-h-screen"
    >
      <div
        className={`relative transition-all duration-700 ease-in-out ${inView ? "scale-100 opacity-100" : "scale-75 opacity-40"}`}
        style={{ width: `${cardWidth}px` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* Project Counter - Top Right */}
        <div
          className="absolute text-[#8A8A8A] text-2xl font-bold transition-all duration-500"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            top: '-48px',
            right: isHovered ? `${shiftAmount}px` : '0px'
          }}
        >
          {String(index + 1).padStart(2, '0')} / {String(totalProjects).padStart(2, '0')}
        </div>

        {/* Type - Above Image */}
        <div
          className="transition-all duration-500"
          style={{
            textAlign: 'center',
            marginBottom: '16px',
            opacity: isHovered ? 1 : 0,
            transform: `translateY(${isHovered ? '0px' : '-10px'}) translateX(${isHovered ? `-${shiftAmount}px` : '0px'})`
          }}
        >
          <p
            className="text-[#8A8A8A] text-base font-bold"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {project.type}
          </p>
        </div>

        {/* Image */}
        <div
          className="relative transition-all duration-500 border border-[#8A8A8A]"
          style={{
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
            transform: isHovered ? `translateX(-${shiftAmount}px)` : 'translateX(0)',
          }}
        >
          <a href={project.link} className="block w-full h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{
                transform: isHovered ? "scale(1.02)" : "scale(1)",
              }}
              onError={(e) => {
                e.target.src = `data:image/svg+xml,%3Csvg width="1275" height="675" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="1275" height="675" fill="%231A1A1A"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%238A8A8A" font-size="48" font-family="DM Sans"%3E${project.title}%3C/text%3E%3C/svg%3E`;
              }}
            />
          </a>
        </div>

        {/* Separator Line */}
        <div
          className="absolute transition-all duration-500"
          style={{
            left: `${cardWidth - shiftAmount + 20}px`,
            top: '47.5%',
            transform: `translateY(-50%) scaleY(${isHovered ? 1 : 0})`,
            transformOrigin: 'top',
            width: '4px',
            height: `${cardHeight}px`,
            background: '#0066FF',
            opacity: isHovered ? 1 : 0
          }}
        />

        {/* Description - Right Side */}
        <div
          className="absolute transition-all duration-500"
          style={{
            left: `${cardWidth - shiftAmount + 40}px`,
            top: '45%',
            transform: 'translateY(-50%)',
            width: '300px',
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? 'auto' : 'none',
            marginTop: '8px'
          }}
        >
          <p
            className="text-[#F5F5F5] text-m font-semibold leading-relaxed mb-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {typedText}
            {isHovered && typedText.length < project.description.length && showCursor && (
              <span className="text-[#0066FF]">|</span>
            )}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-transparent text-[#8A8A8A] text-xs font-semibold border border-[#8A8A8A]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Title - Below Image */}
        <div
          className="transition-all duration-500"
          style={{
            textAlign: 'center',
            marginTop: '24px',
            opacity: isHovered ? 1 : 0,
            transform: `translateY(${isHovered ? '0px' : '10px'}) translateX(${isHovered ? `-${shiftAmount}px` : '0px'})`
          }}
        >
          <a
            href={project.link}
            className="text-3xl font-bold text-[#F5F5F5] hover:text-[#FF6B35] transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {project.title}
          </a>
        </div>
      </div>
    </div>
  );
};

const AllProjectsButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#"
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative px-6 py-3 border-2 transition-all duration-300 overflow-hidden"
        style={{
          borderColor: '#0066FF',
          background: isHovered ? '#FF6B35' : 'transparent',
        }}
      >
        <div
          className="absolute inset-0 bg-[#FF6B35] transition-transform duration-300 origin-bottom"
          style={{
            transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
          }}
        />

        <div className="relative flex items-center gap-3">
          <span
            className="text-sm font-bold transition-colors duration-300 whitespace-nowrap"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              color: isHovered ? 'white' : '#0066FF'
            }}
          >
            All Projects
          </span>

          <svg
            className="w-3 h-3 transition-all duration-300"
            style={{
              stroke: isHovered ? 'white' : '#0066FF',
              transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)'
            }}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default ProjectsPage;