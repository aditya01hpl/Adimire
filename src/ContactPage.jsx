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
      question: "What services do you offer?",
      answer: "I specialize in full-stack web development, including frontend development with React, backend development with Node.js, cloud deployment on AWS, and UI/UX design consultation."
    },
    {
      id: 2,
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on complexity. A simple website typically takes 2-4 weeks, while complex web applications can take 2-3 months. I'll provide a detailed timeline after understanding your requirements."
    },
    {
      id: 3,
      question: "Do you work with international clients?",
      answer: "Yes! I work with clients globally. I'm comfortable with remote collaboration and can adjust my schedule to accommodate different time zones for meetings and updates."
    },
    {
      id: 4,
      question: "What is your development process?",
      answer: "I follow an agile approach: initial consultation, project planning, design mockups, iterative development with regular check-ins, testing, deployment, and post-launch support."
    },
    {
      id: 5,
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, I offer maintenance packages for ongoing support, updates, bug fixes, and feature enhancements. We can discuss a plan that fits your needs after project completion."
    },
    {
      id: 6,
      question: "What are your rates?",
      answer: "Rates vary based on project scope and complexity. I offer both project-based pricing and hourly rates. Contact me with your project details for a customized quote."
    }
  ];

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "hello@yourname.com",
      link: "mailto:hello@yourname.com"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Madrid, Spain",
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
    <div className="h-screen bg-[#0F0F0F] text-[#F5F5F5] flex items-start px-8 py-8 overflow-hidden">
      
      {/* Max-width container with flex layout */}
      <div className="max-w-7xl mx-auto w-full flex items-start gap-12 h-full">
        
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
                className="text-3xl font-black mb-2 text-[#F5F5F5]" 
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
                    className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#8A8A8A] rounded-lg text-[#F5F5F5] placeholder-[#8A8A8A] focus:outline-none focus:border-[#0066FF] transition-all"
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
                    className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#8A8A8A] rounded-lg text-[#F5F5F5] placeholder-[#8A8A8A] focus:outline-none focus:border-[#0066FF] transition-all"
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
                    className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#8A8A8A] rounded-lg text-[#F5F5F5] placeholder-[#8A8A8A] focus:outline-none focus:border-[#0066FF] transition-all"
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
                    className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#8A8A8A] rounded-lg text-[#F5F5F5] placeholder-[#8A8A8A] focus:outline-none focus:border-[#0066FF] transition-all resize-none"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#FF6B35] text-white font-bold rounded-lg hover:bg-[#FF5625] transition-all duration-300 flex items-center justify-center gap-2"
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
                    <div className="w-10 h-10 bg-[#1A1A1A] rounded-lg flex items-center justify-center border border-[#8A8A8A]">
                      <span className="text-[#0066FF]">{info.icon}</span>
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
                          className="text-sm text-[#F5F5F5] hover:text-[#0066FF] transition-colors"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p 
                          className="text-sm text-[#F5F5F5]" 
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
                className="text-3xl font-black mb-2 text-[#F5F5F5]" 
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
              <div className="mt-8 p-6 bg-[#1A1A1A] rounded-lg border border-[#8A8A8A]">
                <h3 
                  className="text-lg font-bold mb-2 text-[#F5F5F5]" 
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
                  href="mailto:hello@yourname.com"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0066FF] text-white text-sm font-bold rounded-lg hover:bg-[#0055DD] transition-all duration-300"
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
      className="bg-[#1A1A1A] rounded-lg border border-[#8A8A8A] overflow-hidden transition-all duration-300 hover:border-[#0066FF]"
    >
      <button
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-center justify-between text-left"
      >
        <span 
          className="text-sm font-bold text-[#F5F5F5]" 
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {faq.question}
        </span>
        <ChevronDown 
          size={20} 
          className={`flex-shrink-0 transition-transform duration-300 text-[#0066FF] ${
            isOpen ? 'rotate-180' : ''
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