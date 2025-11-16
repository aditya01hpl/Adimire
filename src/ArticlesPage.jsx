import React from 'react';

const ArticlesPage = () => {
  const articles = [
    {
      id: 1,
      title: "Inside the Mind of a Tuned Model (FFT, IFT, RLHF, LoRA & PEFT)",
      description: "A no-nonsense overview of modern LLM fine-tuning—covering how we move from full-parameter updates (FFT/SFT) to smarter, memory-saving tricks like LoRA and Adapters. Includes the basics of Instruction Fine-Tuning, RLHF for real-world alignment, and why PEFT changes the game.",
      date: "November 13, 2025",
      category: "LLMs",
      image: "src/assets/Blog1/image.png",
      link: "https://medium.com/@savditya/inside-the-mind-of-a-tuned-model-fft-ift-rlhf-lora-peft-da8f9f236edd"
    },
    {
      id: 2,
      title: "The Secret Third Stage That Makes Modern LLMs Actually “Think”",
      description: "A straight-up look at how reinforcement learning is used to teach LLMs to align with human feedback. Breaks down RLHF—how human ranking creates a reward model, which then guides the LLM to maximize helpfulness and safety.",
      date: "August 17, 2025",
      category: "AI",
      image: "src/assets/Blog3/image.png",
      link: "https://medium.com/@savditya/the-secret-third-stage-that-makes-modern-llms-actually-think-f1d56779621f"
    },
    {
      id: 3,
      title: "AR-Driven Smart Homes: Enhancing Automation and User Experience",
      description: "A proposed study that presents the design and implementation of an innovative home automation system leveraging Augmented Reality (AR) technology to enhance user interaction and control over electrical appliances.",
      date: "August 02, 2024",
      category: " Intelligent Systems Design and Applications",
      image: "src/assets/Blog2/image.png",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-64850-2_24"
    },
    {
      id: 4,
      title: "The Age of Viral Certainties - Why Every Reel Feels Like a Verdict",
      description: "A sharp, reflective take on how the Internet has replaced real knowledge with viral certainty. This blog questions the influencer formulas, algorithmic drama, and our obsession with easy answers—inviting readers to value doubt and think deeper in a world full of noise.",
      date: "November 14, 2025",
      category: "Internet & Society",
      image: "src/assets/Blog4/image4.png",
      link: "https://medium.com/@savditya/the-age-of-viral-certainties-why-every-reel-feels-like-a-verdict-a9f9aa65aaec"
    }
  ];

  return (
    <div className="h-screen bg-black text-white flex items-start px-8 py-8 overflow-hidden">

      {/* Max-width container with flex layout */}
      <div className="max-w-7xl mx-auto w-full flex items-start gap-40 h-full">

        {/* Left Label: "ARTICLE /" */}
        <div className="pt-1.5">
          <p
            className="text-m font-semibold text-[#8A8A8A] tracking-[0.2em] uppercase whitespace-nowrap"
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
  const isExternal = article.link.startsWith('http');

  return (
    <a
      href={article.link}
      target={isExternal ? "_blank" : undefined} 
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group relative block h-fit mb-4"
      style={{ display: 'inline-block', width: '100%', breakInside: 'avoid', WebkitColumnBreakInside: 'avoid' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative bg-black border border-[#8A8A8A] rounded-lg overflow-hidden transition-all duration-300 ${isHovered ? 'transform -translate-y-1 shadow-[8px_8px_0px_white]' : ''}`}>
        {/* Image */}
        <div className="relative bg-black overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ aspectRatio: '16/9' }}
            onError={(e) => {
              e.target.src = `data:image/svg+xml,%3Csvg width="400" height="225" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="225" fill="%231A1A1A"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%238A8A8A" font-size="14" font-family="DM Sans"%3E${article.category}%3C/text%3E%3C/svg%3E`;
            }}
          />

          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-white text-black text-[10px] font-bold rounded" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-1.5">
            <span className="text-[#8A8A8A] text-[10px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {article.date}
            </span>
          </div>

          <h3 className={`text-sm font-bold text-white mb-2 leading-tight transition-colors ${isHovered ? 'text-black' : ''}`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {article.title}
          </h3>

          <p className="text-[#8A8A8A] text-xs leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {article.description}
          </p>
        </div>
      </div>
    </a>
  );
};

const ExternalLinks = () => {
  const links = [
    { title: "More Articles", link: "https://medium.com/@savditya", svgPlaceholder: "TA" },
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
        className="relative px-4 py-2 border-2 transition-all duration-300 overflow-hidden"
        style={{ borderColor: 'white', background: isHovered ? 'white' : 'transparent' }}
      >
        <div className="relative flex items-center gap-2">
          <span
            className="text-[10px] font-bold transition-colors duration-300"
            style={{ fontFamily: 'DM Sans, sans-serif', color: isHovered ? 'black' : 'white' }}
          >
            {item.svgPlaceholder}
          </span>

          <span
            className="text-xs font-bold transition-colors duration-300 whitespace-nowrap"
            style={{ fontFamily: 'DM Sans, sans-serif', color: isHovered ? 'black' : 'white' }}
          >
            {item.title}
          </span>

          <svg
            className="w-2.5 h-2.5 transition-all duration-300"
            style={{ stroke: isHovered ? 'black' : 'white', transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)' }}
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