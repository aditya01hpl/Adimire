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
    <div className="h-screen bg-[#B8C4A9] text-black flex items-start px-8 py-8 overflow-hidden">
      
      {/* Max-width container with flex layout */}
      <div className="max-w-7xl mx-auto w-full flex items-start gap-12 h-full">
        
        {/* Left Label: "ARTICLE /" */}
        <div className="pt-1.5"> 
          <p 
            className="text-m font-semibold text-black/60 tracking-[0.2em] uppercase whitespace-nowrap"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            ARTICLE /
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 h-full overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`
            .flex-1::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {/* Articles Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 mb-6" style={{ columnGap: '1rem' }}>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <ExternalLinks />
        </div>
      </div>
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
      <div
        className={`relative bg-white border-2 border-black/10 rounded-lg overflow-hidden transition-all duration-300 ${
          isHovered ? 'transform -translate-y-1 shadow-[8px_8px_0px_rgba(37,99,235,1)]' : ''
        }`}
      >
        {/* Image */}
        <div className="relative bg-black/5 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ aspectRatio: '16/9' }}
            onError={(e) => {
              e.target.src = `data:image/svg+xml,%3Csvg width="400" height="225" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="225" fill="%23f5f5f5"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999" font-size="14" font-family="DM Sans"%3E${article.category}%3C/text%3E%3C/svg%3E`;
            }}
          />
          
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-black text-white text-[10px] font-bold rounded" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-1.5">
            <span className="text-black/50 text-[10px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {article.date}
            </span>
          </div>
          
          <h3 className="text-sm font-bold text-black mb-2 leading-tight group-hover:text-black/70 transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {article.title}
          </h3>
          
          <p className="text-black/60 text-xs leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
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
    <div className="flex items-center justify-center gap-3 pt-6 pb-6">
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
        className="relative px-4 py-2 border-2 border-black transition-all duration-300 overflow-hidden"
        style={{
          background: isHovered ? 'black' : 'white',
        }}
      >
        <div className="relative flex items-center gap-2">
          <span 
            className="text-[10px] font-bold transition-colors duration-300"
            style={{ 
              fontFamily: 'DM Sans, sans-serif',
              color: isHovered ? 'white' : 'black'
            }}
          >
            {item.svgPlaceholder}
          </span>
          
          <span 
            className="text-xs font-bold transition-colors duration-300 whitespace-nowrap"
            style={{ 
              fontFamily: 'DM Sans, sans-serif',
              color: isHovered ? 'white' : 'black'
            }}
          >
            {item.title}
          </span>
          
          <svg 
            className="w-2.5 h-2.5 transition-all duration-300"
            style={{
              stroke: isHovered ? 'white' : 'black',
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