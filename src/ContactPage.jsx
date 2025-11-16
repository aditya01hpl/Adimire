import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, ChevronDown } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
  {
    id: 1,
    question: "What are your core technical skills?",
    answer: "I specialize in AI/ML engineering with expertise in Python, Computer Vision (OpenCV, PyTorch), NLP (transformers, LLMs, VLMs), and RAG systems. I build production-grade ML using vector databases (Chroma, Qdrant, FAISS), design scalable APIs (REST, gRPC), and architect microservices with Docker and Kafka."
  },
  {
    id: 2,
    question: "What is your professional background?",
    answer: "I have 2 years of experience as an AI Engineer building scalable ML systems, microservices architectures, and robust AI solutions across multiple teams. My background is in Computer Science, specialized in AI & ML."
  },
  {
    id: 3,
    question: "What kind of roles are you actively seeking?",
    answer: "I'm looking for AI/ML and backend engineering roles where I can contribute to impactful projects, system design, and cutting-edge ML products. I thrive in environments that value innovation, continuous learning, and technical excellence."
  },
  {
    id: 4,
    question: "How do you approach learning and self-improvement?",
    answer: "I learn by doing—building side projects, solving algorithmic challenges on LeetCode, exploring research papers, and contributing to open-source. I stay current with AI/ML trends and believe in translating theory into real-world implementation."
  },
  {
    id: 5,
    question: "What projects have you recently worked on?",
    answer: "I've built Inspectra (AI vehicle inspection chatbot with RAG, FAISS, Ollama), Pulse (production ML serving with canary deployment and A/B testing), Cipher (multimodal RAG for technical document QA), and Carnisight (computer vision system for meat quality classification with XAI). Check my GitHub for detailed implementations."
  },
  {
    id: 6,
    question: "How can recruiters contact you for opportunities?",
    answer: "I'm always open to exciting opportunities. Reach out via email or phone. I respond within 24 hours and happy to discuss roles or share my resume."
  }
];



  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "savditya@gmail.com",
      link: "mailto:savditya@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91 6388831718",
      link: "tel:+91 6388831718"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Hyderabad, India",
      link: null
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="h-screen bg-black text-white flex items-start px-8 py-8 overflow-hidden">

      {/* Max-width container with flex layout */}
      <div className="max-w-7xl mx-auto w-full flex items-start gap-36 h-full">

        {/* Left Label: "CONTACT /" */}
        <div className="pt-1.5">
          <p
            className="text-m font-semibold text-[#8A8A8A] tracking-[0.2em] uppercase whitespace-nowrap"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            CONTACT /
          </p>
        </div>

        {/* Main Content Area - Scrollable */}
        <div
          className="flex-1 h-full overflow-y-auto pr-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            .flex-1::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left Column - Contact Form */}
            <div>
              <h2
                className="text-3xl font-black mb-2 text-white"
                style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.02em' }}
              >
                Let's Work Together
              </h2>
              <p
                className="text-s text-[#8A8A8A] mb-6"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Have a project in mind? Fill out the form below and I'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-white rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:border-[#8A8A8A] transition-all"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-white rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:border-[#8A8A8A] transition-all"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-white rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:border-[#8A8A8A] transition-all"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-black border border-white rounded-lg text-white placeholder-[#8A8A8A] focus:outline-none focus:border-[#8A8A8A] transition-all resize-none"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-black border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center border border-white">
                      <span className="text-white">{info.icon}</span>
                    </div>
                    <div>
                      <p
                        className="text-xs text-[#8A8A8A] uppercase tracking-wider"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm text-white hover:text-black hover:bg-white transition-colors px-2 py-1 rounded"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p
                          className="text-sm text-white"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - FAQ */}
            <div>
              <h2
                className="text-3xl font-black mb-2 text-white"
                style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '-0.02em' }}
              >
                Frequently Asked Questions
              </h2>
              <p
                className="text-s text-[#8A8A8A] mb-6"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Find answers to common questions about my services and process.
              </p>

              <div className="space-y-3">
                {faqs.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    faq={faq}
                    isOpen={openFAQ === faq.id}
                    onToggle={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                  />
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-6 bg-black rounded-lg border border-white">
                <h3
                  className="text-lg font-bold mb-2 text-white"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Still have questions?
                </h3>
                <p
                  className="text-sm text-[#8A8A8A] mb-4"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Can't find the answer you're looking for? Feel free to reach out directly.
                </p>
                <a
                  href="mailto:savditya@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black border-2 border-white text-white text-sm font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Email Me
                  <Mail size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div
      className="bg-black rounded-lg border border-white overflow-hidden transition-all duration-300 hover:border-white"
    >
      <button
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-center justify-between text-left"
      >
        <span
          className="text-sm font-bold text-white"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 transition-transform duration-300 text-white ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? '200px' : '0'
        }}
      >
        <div className="px-5 pb-4">
          <p
            className="text-sm text-[#8A8A8A] leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;