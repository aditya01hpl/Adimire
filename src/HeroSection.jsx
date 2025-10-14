import React from 'react';

// Change 1: Header component is completely restructured.
const MinimalHeader = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'works', label: 'WORKS' },
    { id: 'contact', label: 'CONTACT' },
    { id: 'blog', label: 'BLOG' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-full"></div> {/* Placeholder for avatar image */}
            <span className="font-bold text-sm tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>HUGO VICARIO</span>
        </div>

        {/* Center Navigation */}
        <ul className="flex items-center gap-8">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-bold transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'text-black underline' // Style for active link
                    : 'text-black/70 hover:text-black'
                }`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Right Side: Button */}
        <div className="w-auto">
            <button className="px-6 py-3 bg-black text-white text-xs font-bold rounded-md" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                USE TEMPLATE
            </button>
        </div>
      </nav>
    </header>
  );
};

// Change 2: Hero Section uses a flex layout for better alignment.
const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-white flex flex-col justify-center">
      {/* Main Content Aligned to Left */}
      <div className="max-w-7xl px-8 pl-16 flex items-center gap-12">
        {/* Giant Decorative Letters */}
        <div className="flex flex-col leading-none select-none">
          <span className="text-[250px] font-black text-black">H</span>
          <span className="text-[250px] font-black text-black">V</span>
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <p className="text-xs tracking-[0.2em] text-black/80 mb-6 font-medium uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            CURRENTLY BASED IN MADRID
          </p>

          <h1 className="text-[80px] font-black text-black leading-none mb-8" style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.02em' }}>
            DIGITAL<br />
            DESIGNER AND<br />
            ART DIRECTOR
          </h1>

          <p className="text-sm text-black/80 leading-relaxed max-w-lg font-medium uppercase tracking-widest" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            I am presently operating independently, specializing in crafting digital experiences and challenges by crafting visually appealing and fully functional designs.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      
    </div>
  );
};


// Change 3: Social Icons are simplified to be static without hover animations.
const SocialIcons = () => {
  const socials = [
    { 
      name: 'Instagram', 
      url: '#',
      icon: (color) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: '#',
      icon: (color) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    },
    { 
      name: 'Medium', 
      url: '#',
      icon: (color) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill={color} stroke="none">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      )
    },
    { 
      name: 'LeetCode', 
      url: '#',
      icon: (color) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill={color} stroke="none">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      )
    }
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div className="absolute bottom-6 left-8 flex gap-3 z-30">
      {socials.map((social, index) => (
        <div
          key={social.name}
          className="relative rounded-full border-2 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden flex items-center"
          style={{
            width: hoveredIndex === index ? '120px' : '40px',
            height: '40px',
            backgroundColor: hoveredIndex === index ? 'black' : 'transparent',
            borderColor: hoveredIndex === index ? 'black' : 'rgba(0, 0, 0, 0.2)'
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex items-center px-2 gap-2"
            aria-label={social.name}
          >
            <div className="flex-shrink-0 flex items-center justify-center">
              {social.icon(hoveredIndex === index ? 'white' : 'black')}
            </div>
            <span 
              className="text-sm font-bold whitespace-nowrap transition-all duration-100"
              style={{ 
                fontFamily: 'DM Sans, sans-serif',
                color: 'white',
                opacity: hoveredIndex === index ? 1 : 0,
                transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(10px)'
              }}
            >
              {social.name}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

// Scroll Indicator Component - keeping the same effect
const ScrollIndicator = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [animationKey, setAnimationKey] = React.useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimationKey(prev => prev + 1); // Trigger new animation each time
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="absolute bottom-6 right-8 rounded-full border-2 cursor-pointer flex items-center overflow-hidden z-30"
      style={{
        width: '160px',
        height: '48px',
        backgroundColor: 'transparent',
        borderColor: 'rgba(0, 0, 0, 0.2)',
        paddingLeft: '50px',
        paddingRight: '16px'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between w-full">
        {/* Text that appears on hover - comes from left like a train */}
        <span 
          key={animationKey}
          className="text-xs tracking-wider font-bold whitespace-nowrap absolute"
          style={{ 
            fontFamily: 'DM Sans, sans-serif',
            color: 'black',
            animation: isHovered ? 'slideIn 0.3s ease-in forwards' : 'none',
            opacity: isHovered ? 1 : 0
          }}
        >
          SCROLL
        </span>
        
        {/* Static text - always visible, fades out on hover */}
        <span 
          className="text-xs tracking-wider font-bold whitespace-nowrap transition-opacity duration-300"
          style={{ 
            fontFamily: 'DM Sans, sans-serif',
            color: 'black',
            opacity: isHovered ? 0 : 1
          }}
        >
          SCROLL
        </span>
        
        {/* Arrow - always fixed on the right */}
        <svg 
          className="flex-shrink-0" 
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: 'rotate(-45deg)'
          }}
        >
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};


export default HeroSection;
export { MinimalHeader, SocialIcons, ScrollIndicator };