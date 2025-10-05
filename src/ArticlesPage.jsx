import React from 'react';

const ArticlesPage = () => {
  const articles = [
    {
      id: 1,
      title: "Building Scalable Microservices Architecture",
      description: "Exploring distributed systems design patterns, service mesh implementations, and strategies for maintaining consistency across microservices. This comprehensive guide covers everything from API gateway patterns to event-driven architectures.",
      date: "March 15, 2024",
      category: "Architecture",
      image: "article1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Machine Learning in Production",
      description: "A deep dive into MLOps practices, model deployment strategies, and monitoring techniques for production ML systems. Learn how to version datasets and automate training pipelines.",
      date: "March 10, 2024",
      category: "AI/ML",
      image: "article2.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "React Performance Optimization",
      description: "Mastering React performance with code splitting, lazy loading, and memoization strategies. Discover advanced techniques for reducing bundle sizes and creating smooth experiences.",
      date: "March 5, 2024",
      category: "Frontend",
      image: "article3.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "Kubernetes Production Practices",
      description: "Enterprise-grade container orchestration with Kubernetes, covering resource management, security hardening, and monitoring strategies for resilient deployments.",
      date: "February 28, 2024",
      category: "DevOps",
      image: "article4.jpg",
      link: "#"
    },
    {
      id: 5,
      title: "Neural Networks Explained",
      description: "Understanding deep learning fundamentals from backpropagation to transformer architectures. This guide walks through mathematical foundations and practical applications.",
      date: "February 20, 2024",
      category: "AI/ML",
      image: "article5.jpg",
      link: "#"
    },
    {
      id: 6,
      title: "GraphQL vs REST APIs",
      description: "Comprehensive comparison of API design approaches, exploring trade-offs and implementation strategies. Learn when to use each approach and how to design schemas that scale.",
      date: "February 15, 2024",
      category: "Backend",
      image: "article6.jpg",
      link: "#"
    }
  ];

  return (
  <div className="py-8 px-6 md:px-12 lg:px-20">
    <div className="mb-8 text-left">
      <h1 className="text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
        Articles & Papers
      </h1>
      <p className="text-[#7d8590] text-lg" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
        Deep dives into technology, architecture, and software engineering practices
      </p>
    </div>
    
    <div className="columns-1 md:columns-2 lg:columns-3 mb-4" style={{ columnGap: '1rem' }}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <ExternalLinks />
    </div>
  );
};

const ArticleCard = ({ article }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={article.link}
      className="group relative block h-fit mb-4"
      style={{ display: 'inline-block', width: '100%', breakInside: 'avoid', WebkitColumnBreakInside: 'avoid' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card */}
      <div
        className={`relative bg-[#161b22] border-[3px] border-white rounded-none overflow-hidden transition-all duration-300 ${
          isHovered ? '-translate-x-1 -translate-y-1' : ''
        }`}
        style={{
          boxShadow: isHovered ? '4px 4px 0px rgba(0, 38, 255, 0.94)' : 'none'
        }}
      >
        {/* Image */}
        <div className="relative bg-[#0d1117] overflow-hidden border-b-[3px] border-white">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ aspectRatio: '16/9' }}
            onError={(e) => {
              e.target.src = `data:image/svg+xml,%3Csvg width="400" height="225" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="225" fill="%230d1117"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%238b949e" font-size="14" font-family="Ubuntu"%3E${article.category}%3C/text%3E%3C/svg%3E`;
            }}
          />
          
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-white text-black text-xs font-bold" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="mb-2">
            <span className="text-[#7d8590] text-xs" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              {article.date}
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
            {article.title}
          </h3>
          
          <p className="text-[#8b949e] text-sm leading-relaxed" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
            {article.description}
          </p>
        </div>
      </div>
    </a>
  );
};

const ExternalLinks = () => {
  const links = [
    { title: "Tech Articles", link: "#", svgPlaceholder: "TA" },
    { title: "AI Writeups", link: "#", svgPlaceholder: "AI" },
    { title: "Threads of Time", link: "#", svgPlaceholder: "TT" }
  ];

  return (
    <div className="flex items-center justify-center gap-4 pt-4">
      {links.map((item, index) => (
        <LinkButton key={index} item={item} />
      ))}
    </div>
  );
};

const LinkButton = ({ item }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative px-4 py-2 border-2 border-white/20 transition-all duration-300 overflow-hidden"
        style={{
          background: isHovered ? 'white' : 'black',
        }}
      >
        {/* Fill animation */}
        <div 
          className="absolute inset-0 bg-white transition-transform duration-300 origin-bottom"
          style={{
            transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
          }}
        />
        
        <div className="relative flex items-center gap-2">
          {/* SVG Icon Placeholder */}
          <span 
            className="text-xs font-bold transition-colors duration-300"
            style={{ 
              fontFamily: 'Ubuntu, sans-serif',
              color: isHovered ? 'black' : 'white'
            }}
          >
            {item.svgPlaceholder}
          </span>
          
          <span 
            className="text-sm font-bold transition-colors duration-300 whitespace-nowrap"
            style={{ 
              fontFamily: 'Ubuntu, sans-serif',
              color: isHovered ? 'black' : 'white'
            }}
          >
            {item.title}
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

export default ArticlesPage;