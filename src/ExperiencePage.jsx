import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      logo: "cloudbox4.jpg",
      place:"CBT.jfif",
      company: "Cloudbox AI",
      role: "AI Engineer",
      duration: "Sept 2025 - Present",
      description:
        "CloudBox AI is a leading system integrator that unifies diverse technologies and AI-driven platforms into intelligent, future-ready business solutions, helping companies grow smarter and more secure.",
      website: "https://cbtait.com/",
      responsibilities: [
        "Developed and deployed AI backend for Zuuz using Go, gRPC, and Docker on Kubernetes, ensuring smooth and low-latency model inference.",
        "Built the end-to-end data pipeline that ingests multi-source signals (MS Graph, webhooks, MinIO, and Kafka), performs enrichment and batching in Python workers, and serves contextual summaries to downstream models via protobufs and gRPC.",
        "Productionized model serving with ONNX Runtime and async batching, cutting inference time and cost.",
        "Contributed to CI/CD, logging, and monitoring setup using GitHub Actions, Prometheus, and Grafana for better system reliability.",
      ],
      skills: ["Go", "gRPC", "Docker", "Kubernetes", "Python", "Kafka", "ONNX Runtime", "Prometheus", "CI/CD"],
    },
    {
      id: 2,
      logo: "sphereglobal.jpg",
      place:"sphere.jfif",
      company: "Sphere Global",
      role: "AI Engineer",
      duration: "Sept 2024 - Sept 2025",
      description:
        "SphereGlobal is a technology company specializing in AI-powered optimization and autonomous inspection solutions for complex logistics and supply chain operations, trusted by industry leaders like FedEx, Ford, and Enterprise.",
      website: "https://sphereglobal.com/",
      responsibilities: [
        "Developed a Qwen2.5-based LLM chatbot trained on 10K+ inspection reports, enabling natural language damage analysis.",
        "Built and deployed a YOLOv8-OBB vision system for VIN detection, cutting processing time by more than half.",
        "Automated data extraction workflows with Phi-3 mini and spaCy NER, reducing manual review time by 85%.",
        "Led backend architecture design using FastAPI and async pipelines, ensuring robust performance under real-time load.",
      ],
      skills: ["FastAPI", "PyTorch", "YOLOv8", "spaCy", "Qwen2.5", "PostgreSQL", "Docker", "LangChain"],
    },
    {
      id: 3,
      logo: "forbes1.jpg",
      place:"FA.jfif",
      company: "Forbes Advisor",
      role: "Data Analyst Intern",
      duration: "Jan 2024 - Jun 2024",
      description:
        "Forbes Advisor is a global platform providing unbiased personal finance advice, news, reviews, and a comparison marketplace to help consumers make confident financial decisions across credit cards, loans, insurance, investing, and more.",
      website: "https://www.forbes.com/advisor/",
      responsibilities: [
        "Deployed GA4 + GTM tracking across marketplace pages to map engagement and user behavior.",
        "Automated BigQuery pipelines for daily analytics, unlocking cross-platform insights with near-real-time data.",
        "Designed and maintained dashboards for executives, streamlining weekly and monthly reporting.",
      ],
      skills: ["Google Analytics 4", "GTM", "BigQuery", "SQL", "Python", "Data Studio", "ETL Pipelines"],
    },
    {
      id: 4,
      logo: "hofinsoft1.jpg",
      place:"hofinsoft.jfif",
      company: "Hofinsoft",
      role: "NLP Intern",
      duration: "Aug 2021 - Mar 2022",
      description:
        "Hofinsoft Technologies is a Chennai-based leader in Enterprise Asset Management and Supply Chain Effectiveness, specializing in MRO-centric master data management, governance, and consulting services for asset-heavy industries like oil & gas, manufacturing, and energy.",
      website: "https://cloudworks.com",
      responsibilities: [
        "Built NLP models for analyzing user feedback, improving processing efficiency and data clarity.",
        "Trained a Bi-LSTM entity-relationship extractor to identify hardware components and their attributes.",
        "Designed preprocessing workflows for structured and unstructured text, cutting model training time by 25%.",
      ],
      skills: ["Python", "TensorFlow", "Bi-LSTM", "NLP", "Pandas", "scikit-learn", "Data Preprocessing"],
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div id="experience-section" className="h-screen bg-black text-white flex items-start px-8 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex items-start gap-28 h-full">
        <div className="pt-2">
          <p className="text-m font-semibold text-[#8A8A8A] tracking-[0.2em] uppercase whitespace-nowrap" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            EXPERIENCE /
          </p>
        </div>
        <div className="flex-1 h-full overflow-y-auto pl-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`.flex-1::-webkit-scrollbar { display: none; }`}</style>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <React.Fragment key={exp.id}>
                <div
                  className={`transition-all duration-700 ease-out ${hoveredId === exp.id ? "pb-6" : "pb-0"}`}
                >
                  <div className="flex gap-6 items-start">
                    {/* Left section: Logo, Company, Role, Duration */}
                    <div className="w-36 flex flex-col items-center pt-1">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-28 h-16 object-contain bg-black"
                        style={{ borderRadius: 0, border: 'none' }}
                      />
                      <h3 className="text-lg font-bold text-center text-white " style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {exp.company}
                      </h3>
                      <p className="text-base text-[#8A8A8A] text-center mt-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {exp.role}
                      </p>

                    </div>

                    {/* Right section: Description or expanded info on hover */}
                    <div
                      className="flex-1 pl-6"
                      onMouseEnter={() => setHoveredId(exp.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div
                        className={`transition-all duration-700 ease-out rounded-xl p-6 ${hoveredId === exp.id
                          ? "bg-black text-white scale-[1.01] ring-1 ring-white/15"
                          : "bg-black text-white scale-100 ring-0"
                          }`}
                        style={{ willChange: 'transform, opacity' }}
                      >
                        {hoveredId !== exp.id ? (
                          // Initial state: Description with duration on same line
                          <div style={{ fontFamily: 'DM Sans, sans-serif' }} className="transition-all duration-500 ease-out opacity-100">
                            <p className="text-base leading-relaxed">
                              {exp.description.split(' ').slice(0, -4).join(' ')}
                              <span className="float-right ml-4 text-[#8A8A8A]">{exp.duration}</span>
                              {' ' + exp.description.split(' ').slice(-4).join(' ')}
                            </p>
                          </div>
                        ) : (
                          // Hover state: Full info with image
                          <div className="flex gap-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            <div className="flex-1 transition-all duration-500 ease-out translate-y-0 opacity-100">
                              <h4 className="text-base font-bold mb-3 uppercase tracking-wider">
                                Responsibilities
                              </h4>
                              <ul className="list-disc list-inside space-y-2 text-sm mb-4">
                                {exp.responsibilities.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-2 pt-3 mb-4 border-t border-white/20">
                                {exp.skills.map((skill, i) => (
                                  <span
                                    key={i}
                                    className="px-2 py-1 bg-transparent text-white text-xs font-bold border border-white/60 rounded"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-white text-white rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
                              >
                                Website <ArrowUpRight size={16} />
                              </a>
                            </div>
                            {/* Image placeholder */}
                            <div className="w-44 flex items-center justify-center">
                            <img
                                  src={exp.place}
                                  alt={exp.company}
                                  className="w-full h-40 object-cover border-2 border-dashed border-gray-400 rounded-lg transition-all duration-500 ease-out"
                                  style={{
                                    opacity: hoveredId === exp.id ? 1 : 0,
                                    transform: hoveredId === exp.id ? 'translateY(0)' : 'translateY(8px)'
                                  }}
                                />

                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-full h-px bg-white my-6"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;