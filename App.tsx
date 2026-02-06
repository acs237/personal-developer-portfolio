
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Cpu, 
  Cloud, 
  Award, 
  ChevronRight, 
  Mail, 
  MessageSquare, 
  X, 
  Send,
  Zap,
  Globe,
  Terminal,
  Compass,
  CandyCane,
} from 'lucide-react';
import { PROJECTS, CERTIFICATIONS, JOURNEY, SKILLS } from './constants';
import { GoogleGenAI } from '@google/genai';
import { Message } from './types';

// --- Sub-components ---

const ProjectCard: React.FC<{ project: typeof PROJECTS[0], index: number, setIsExpanded: (isExpanded: boolean) => void, isExpanded: boolean }> = ({ project, index, setIsExpanded, isExpanded }) => {
  const isEven = index % 2 === 0;
  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center py-16 group`}>
      <div className="w-full lg:w-3/5 relative overflow-hidden rounded-2xl shadow-2xl bg-slate-900 border border-slate-800">
        {/* TODO: make the video expandable and playable on click */}
        {/* Expandable/playable video */}
        <div className="relative w-full h-full cursor-pointer group" onClick={() => setIsExpanded(true)}>
          <video 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
            autoPlay 
            muted 
            loop 
            playsInline
            onClick={e => {
              // Prevent bubbling to outer div if already expanded
              if (isExpanded) e.stopPropagation();
            }}
          >
            <source src={project.videoUrl} type="video/mp4" />
          </video>
          
        </div>

        {/* Modal for expanded video */}
        {typeof window !== "undefined" && isExpanded && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            onClick={() => setIsExpanded(false)}
          >
            <div
              className="relative w-full max-w-4xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 z-20 p-2 bg-white/80 rounded-full hover:bg-white"
                onClick={() => setIsExpanded(false)}
                aria-label="Close expanded video"
              >
                <X size={24} />
              </button>
              <video
                className="w-full h-auto rounded-2xl shadow-2xl bg-black"
                controls
                autoPlay
              >
                <source src={project.videoUrl} type="video/mp4" />
              </video>
            </div>
          </div>
        )}
        <div className="absolute bottom-4 left-4 flex gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs rounded-full border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-2/5 space-y-6">
        <h3 className="text-3xl font-bold tracking-tight text-slate-900">{project.title}</h3>
        <p className="text-lg text-slate-600 leading-relaxed">{project.description}</p>
        <div className="flex gap-4">
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
            <Github size={18} />
            <span>Code</span>
          </a>
          {/* <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

const CertificationBadge: React.FC<{ cert: typeof CERTIFICATIONS[0] }> = ({ cert }) => (
  <div className="p-8 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
    <div className="w-24 h-24 mb-6 flex items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-100">
      <img 
        src={cert.logoUrl} 
        alt={cert.title} 
        className="max-w-full max-h-full object-contain"
        onError={(e) => {
          // Fallback if local image fails to load
          const target = e.target as HTMLImageElement;
          if (cert.id === 'aws-ccp') target.src = 'https://images.credly.com/size/340x340/images/0063d974-0b30-4240-93c2-a4d1297aa99c/Certified_Cloud_Practitioner__281_29.png';
          if (cert.id === 'aws-saa') target.src = 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/Solutions_Architect_Associate.png';
        }}
      />
    </div>
    <h4 className="text-lg font-bold text-slate-900 mb-1">{cert.title}</h4>
    <p className="text-slate-500 text-sm mb-4">{cert.issuer} • {cert.date}</p>
    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-1">
      Verify Credential <ChevronRight size={14} />
    </a>
  </div>
);

const Timeline: React.FC = () => (
  <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
    {JOURNEY.map((item, idx) => (
      <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-[.is-active]:bg-indigo-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
          {item.type === 'education' ? <Compass size={18} /> : item.type === 'work' ? <Terminal size={18} /> : item.type === 'milestone' ? <Zap size={18} /> : <CandyCane size={18} />}
        </div>
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-slate-900">{item.title}</div>
            <time className="font-medium text-indigo-500 text-sm">{item.year}</time>
          </div>
          <div className="text-slate-500 text-sm font-medium mb-2">{item.company}</div>
          <div className="text-slate-600 leading-relaxed">{item.description}</div>
        </div>
      </div>
    ))}
  </div>
);

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm an AI assistant trained on Aye Chan San's portfolio. Ask me anything about their skills, projects, or background!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: `You are a helpful assistant for Aye Chan San, a Software Engineer.
          Here is their data:
          Degree: Bachelor of Advanced Computer Science (Honours) - BAdvCompSci(Hons)
          Projects: ${JSON.stringify(PROJECTS)}
          Certs: ${JSON.stringify(CERTIFICATIONS)}
          Journey: ${JSON.stringify(JOURNEY)}
          LinkedIn: https://www.linkedin.com/in/aye-chan-san/
          GitHub: https://github.com/acs237
          Email: acs23072000@gmail.com
          
          The user asked: ${input}` }] }
        ],
        config: { temperature: 0.7 }
      });

      const assistantMessage: Message = { role: 'assistant', content: response.text || "Sorry, I couldn't process that." };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting to my brain right now. Please try again later!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 sm:w-96 flex flex-col max-h-[500px] overflow-hidden">
          <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-medium">AI Portfolio Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-slate-300"><X size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 min-h-[300px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-100" />
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            )}
          </div>
          <div className="p-3 border-t border-slate-100 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me something..."
              className="flex-1 px-4 py-2 bg-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button 
              onClick={handleSend}
              className="p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="p-4 bg-slate-900 text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const GITHUB_URL = "https://github.com/acs237";
  const LINKEDIN_URL = "https://www.linkedin.com/in/aye-chan-san/";
  const EMAIL = "acs23072000@gmail.com";
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* Background Decor */}
      <div className="fixed inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold font-display tracking-tight text-slate-900">
            ACS
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#certs" className="hover:text-indigo-600 transition-colors">Certifications</a>
            <a href="#journey" className="hover:text-indigo-600 transition-colors">My Journey</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
          </div>
          <div className="flex gap-4">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-slate-900 transition-colors"><Github size={20} /></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-slate-900 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center max-w-7xl mx-auto">
          <div className="w-full text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Open to Opportunities: Cloud Computing, DevOps, Solutions Architect, Computer Vision
            </div>
            <h1 className="text-6xl md:text-8xl font-black font-display tracking-tighter text-indigo-700 mb-8 leading-[1.1]">
              Aye Chan San
            </h1>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-2xl font-semibold text-slate-900">
                Bachelor of Advanced Computer Science (Honours)
              </p>
              <p className="text-2xl font-semibold text-slate-900">
                UNSW Sydney
              </p>
              <p className="text-xl font-medium text-slate-600 leading-relaxed">
                Final-year student with a strong academic record (WAM 84.19) and a passion for developing impactful software solutions.
              </p>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all">
                View My Work
              </a>
              <a href={`mailto:${EMAIL}`} className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-semibold shadow-sm hover:bg-slate-50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                <Mail size={20} /> Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-white/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Technical Showcase</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full mb-8" />
          </div>
          <div className="divide-y divide-slate-100">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certs" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Certifications</h2>
            <p className="text-lg text-slate-600">Validating my expertise in cloud technologies and software engineering principles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {CERTIFICATIONS.map(cert => (
              <CertificationBadge key={cert.id} cert={cert} />
            ))}
          </div>
          <div className="mt-16 p-8 rounded-3xl bg-indigo-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl -mr-20 -mt-20 rounded-full" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Always Learning</h3>
              <p className="text-indigo-100/80">Continually expanding my skill set with the latest frameworks and cloud-native solutions.</p>
            </div>
            <div className="shrink-0 relative z-10">
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 font-semibold">
                Continuous Growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">My Journey</h2>
            <p className="text-lg text-slate-600">A timeline of my professional growth, academic milestones, and significant engineering accomplishments.</p>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <p className="text-lg text-slate-600">Technologies and tools I work with to build modern applications.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {SKILLS.map(skill => (
              <div key={skill.id} className="group flex flex-col items-center p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-20 px-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="text-2xl font-bold font-display tracking-tight mb-8">
            Aye Chan San
          </div>
          <div className="flex justify-center gap-6 mb-12">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-colors"><Linkedin /></a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-colors"><Github /></a>
            <a href={`mailto:${EMAIL}`} className="p-4 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-colors"><Mail /></a>
          </div>
          <div className="pt-12 border-t border-slate-900 text-slate-500 text-sm">
            © {new Date().getFullYear()} Aye Chan San. All rights reserved.
          </div>
        </div>
      </footer>

      {/* <AIChat /> */}
    </div>
  );
}
