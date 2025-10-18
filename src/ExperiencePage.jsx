import React, { useState } from "react";
import { ArrowUpRight, ClipboardList } from "lucide-react";

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      logo: "cloudbox4.jpg",
      company: "Cloudbox AI",
      role: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description:
        "Leading development of enterprise applications and mentoring junior developers in modern web technologies.",
      website: "https://techcorp.com",
      responsibilities: [
        "Architected and developed scalable microservices using Node.js and React",
        "Led a team of 5 developers in agile development practices",
        "Improved application performance by 40% through optimization",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
      skills: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    },
    {
      id: 2,
      logo: "sphereglobal.jpg",
      company: "Sphere Global",
      role: "Full Stack Developer",
      duration: "2020 - 2022",
      description:
        "Developed and maintained multiple client-facing web applications with focus on user experience and performance.",
      website: "https://digitalsolutions.com",
      responsibilities: [
        "Built responsive web applications using React and TypeScript",
        "Designed and implemented RESTful APIs with Express.js",
        "Collaborated with UX team to improve user engagement by 35%",
        "Mentored 3 junior developers and conducted code reviews",
      ],
      skills: ["React", "TypeScript", "Express.js", "MongoDB", "Git"],
    },
    {
      id: 3,
      logo: "forbes1.jpg",
      company: "Forbes Advisor",
      role: "Frontend Developer",
      duration: "2018 - 2020",
      description:
        "Created innovative user interfaces for startup products, focusing on modern design patterns and accessibility.",
      website: "https://startuplabs.com",
      responsibilities: [
        "Developed pixel-perfect UIs from Figma designs",
        "Implemented state management using Redux",
        "Optimized web vitals achieving 95+ Lighthouse scores",
        "Worked directly with founders on product strategy",
      ],
      skills: ["JavaScript", "React", "Redux", "CSS3", "Webpack"],
    },
    {
      id: 4,
      logo: "hofinsoft1.jpg",
      company: "Hofinsoft",
      role: "Software Engineer Intern",
      duration: "2017 - 2018",
      description:
        "Assisted in developing internal tools and automation scripts improving productivity across teams.",
      website: "https://cloudworks.com",
      responsibilities: [
        "Developed automation scripts using Python",
        "Created internal dashboards for analytics",
        "Worked with DevOps to streamline deployments",
      ],
      skills: ["Python", "Flask", "SQL", "Git", "Docker"],
    },
  ];

  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <div className="h-screen bg-[#fff5d7] text-white flex items-start px-8 py-8 overflow-hidden">
      {/* Max-width container with flex layout */}
      <div className="max-w-7xl mx-auto w-full flex items-start gap-8 h-full">
        
        {/* Left Label: "EXPERIENCE /" */}
        <div className="pt-1.5"> 
          <p 
            className="text-m font-semibold text-white/60 tracking-[0.2em] uppercase whitespace-nowrap"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            EXPERIENCE /
          </p>
        </div>

        {/* Main Content Area - Scrollable Cards */}
        <div 
          className="flex-1 h-full overflow-y-auto pl-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            .flex-1::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Experience Cards */}
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <React.Fragment key={exp.id}>
                <ExperienceCard
                  experience={exp}
                  onOpen={() => setSelectedExp(exp)}
                />
                {/* Separator Line in middle of gap between cards */}
                {index < experiences.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-full h-px bg-white/30"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedExp && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 animate-fadeIn"
          onClick={() => setSelectedExp(null)}
        >
          <div
            className="bg-white text-black rounded-2xl p-6 w-[700px] max-h-[80vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              className="text-xl font-bold mb-2 text-[#3294DA]"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {selectedExp.company}
            </h2>
            <p className="text-sm text-black/70 mb-4">
              {selectedExp.role} • {selectedExp.duration}
            </p>

            <h4
              className="text-sm font-bold text-black mb-3 uppercase tracking-wider"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Responsibilities
            </h4>
            <ul className="space-y-2 mb-4">
              {selectedExp.responsibilities.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-black/70 leading-relaxed"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  <span className="text-[#3294DA] mt-1 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-3 border-t border-black/10">
              {selectedExp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-[#3294DA]/10 text-[#3294DA] text-[10px] font-bold border border-[#3294DA]/30 rounded"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-4 right-4 text-[#3294DA] text-sm font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const ExperienceCard = ({ experience, onOpen }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-[#ff5e6c] text-black p-3 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
      style={{
        fontFamily: "DM Sans, sans-serif",
        minHeight: "100px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex gap-8">
        {/* Left Section: Company Logo, Name and Role (20-25%) */}
          <div className="w-[22%] flex flex-col justify-end items-center">
            {/* Company Logo */}
            <div className="mb-2">
              <div className="w-28 h-18 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,%3Csvg width="48" height="48" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="48" height="48" fill="%233294DA"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="white" font-size="16" font-family="DM Sans" font-weight="bold" dy=".3em"%3E${experience.company.charAt(0)}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>
            </div>
            
            <h3 className="text-m font-bold leading-tight text-center">{experience.company}</h3>
            <p className="text-sm font-semibold italic underline text-black leading-tight mt-1 text-center">
              {experience.role}
            </p>
          </div>

        {/* Right Section: Description and Duration (75-80%) */}
        <div className="flex-1 flex justify-between items-start">
          <div className="flex-1 mr-8">
            <p className="text-m text-black font-normal leading-relaxed">
              {experience.description}
            </p>
            
            {/* Buttons on hover - positioned where description starts */}
            <div className="mt-3">
              <div
                className={`flex gap-3 transition-all duration-500 ${
                  hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                <button
                  onClick={onOpen}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-xs font-semibold rounded-full hover:bg-[#1d6fbf]"
                >
                  <ClipboardList size={14} />
                  Details
                </button>
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#3294DA] text-xs font-semibold border border-[#3294DA] rounded-full hover:bg-[#3294DA] hover:text-white"
                >
                  Website <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
          
          <p className="text-s text-black/100 font-medium whitespace-nowrap ml-4">
            {experience.duration}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;