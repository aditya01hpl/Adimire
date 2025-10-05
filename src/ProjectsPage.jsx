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
    <div className="py-4 px-6 md:px-12 lg:px-20">
      <div className="text-right mb-12">
        <h1 className="text-7xl font-bold text-white mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
          Projects
        </h1>
        <p className="text-[#7d8590] text-lg" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
          Building solutions that solve real-world problems
        </p>
      </div>

      {/* Scroll Container - Hidden Scrollbar */}
      <div
        ref={scrollContainerRef}
        className="snap-y snap-mandatory h-[calc(100vh-120px)] overflow-y-scroll"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style>{`
          .snap-y::-webkit-scrollbar {
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
        const delay = char === '.' || char === ',' ?700 : 15 + Math.random() * 20;

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
  const cardWidth = 800;
  const cardHeight = cardWidth / aspectRatio;
  const shiftAmount = 200;

  return (
    <div
      ref={cardRef}
      className="snap-center flex items-center justify-center h-screen"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative transition-all duration-700 ease-in-out ${inView ? "scale-100 opacity-100" : "scale-75 opacity-40"
          }`}
        style={{ width: `${cardWidth}px` }}
      >
        {/* Project Counter - Top Right */}
        <div
          className="absolute text-white text-2xl font-bold transition-all duration-500"
          style={{
            fontFamily: 'Ubuntu, sans-serif',
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
            className="text-white text-base font-bold"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
          >
            {project.type}
          </p>
        </div>

        {/* Image */}
        <div
          className="relative transition-all duration-500"
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
                e.target.src = `data:image/svg+xml,%3Csvg width="1275" height="675" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="1275" height="675" fill="%23161b22"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%238b949e" font-size="48" font-family="Ubuntu"%3E${project.title}%3C/text%3E%3C/svg%3E`;
              }}
            />
          </a>
        </div>

        {/* White Separator Line */}
        <div
          className="absolute transition-all duration-500"
          style={{
            left: `${cardWidth - shiftAmount + 20}px`,
            top: '47.5%',
            transform: `translateY(-50%) scaleY(${isHovered ? 1 : 0})`,
            transformOrigin: 'top',
            width: '4px',
            height: `${cardHeight}px`,
            background: 'white',
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
            marginTop: '16px'
          }}
        >
          <p
            className="text-[#c9d1d9] text-sm leading-relaxed mb-4"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
          >
            {typedText}
            {isHovered && typedText.length < project.description.length && showCursor && (
              <span className="text-blue-400">|</span>
            )}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white/10 text-white text-xs border border-white/30"
                style={{ fontFamily: 'Ubuntu, sans-serif' }}
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
            className="text-3xl font-bold text-white hover:text-[#7dd3fc] transition-colors"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
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
        className="relative px-6 py-3 border-2 border-white/20 transition-all duration-300 overflow-hidden"
        style={{
          background: isHovered ? 'white' : 'black',
        }}
      >
        <div
          className="absolute inset-0 bg-white transition-transform duration-300 origin-bottom"
          style={{
            transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
          }}
        />

        <div className="relative flex items-center gap-3">
          <span
            className="text-sm font-bold transition-colors duration-300 whitespace-nowrap"
            style={{
              fontFamily: 'Ubuntu, sans-serif',
              color: isHovered ? 'black' : 'white'
            }}
          >
            All Projects
          </span>

          <svg
            className="w-3 h-3 transition-all duration-300"
            style={{
              stroke: isHovered ? 'black' : 'white',
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