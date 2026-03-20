/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Menu, 
  X,
  Mail,
  Phone,
  ArrowRight,
  Code2,
  Database,
  Layout,
  Globe
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-black text-navy tracking-tighter uppercase">
          ODUNYEMI MOSHOOD TEMITAYO
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-navy/70 hover:text-purple font-semibold transition-colors uppercase text-sm tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-purple text-white px-6 py-2.5 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-purple/20 uppercase text-sm">
            Start Project
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white absolute top-full left-0 right-0 shadow-xl p-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-navy/70 hover:text-purple font-bold text-lg uppercase"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-purple text-white px-6 py-3 rounded-lg font-bold w-full uppercase">
            Start Project
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-40 pb-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 z-10"
        >
          <h1 className="text-5xl md:text-7xl font-black text-navy leading-[1.1] mb-6">
            Hi, I'm <br />
            <span className="text-purple">Odunyemi Moshood Temitayo.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-semibold mb-8 tracking-tight">
            Junior Full Stack Web Developer | Node.js | React | Tailwind CSS | Firebase
          </p>
          <p className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed">
            I specialize in building high-performance, scalable web applications with a focus on clean code and exceptional user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-accent text-white px-10 py-4 rounded-lg font-black text-lg hover:scale-105 transition-transform shadow-xl shadow-accent/30 uppercase inline-block">
              HIRE ME
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center relative"
        >
          <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white ring-8 ring-purple/10">
            <img 
              src="3.jpg" 
              alt="Odunyemi Moshood Temitayo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10 blur-2xl opacity-20"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple rounded-full -z-10 blur-2xl opacity-20"></div>
          
          {/* Floating badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 -right-4 bg-white p-4 rounded-2xl shadow-xl hidden lg:block"
          >
            <Code2 className="text-purple" size={32} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-10 -left-4 bg-white p-4 rounded-2xl shadow-xl hidden lg:block"
          >
            <Database className="text-accent" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const skills = [
    { icon: Globe, title: "Frontend", desc: "React, Tailwind CSS, Responsive Design" },
    { icon: Layout, title: "Backend", desc: "Node.js, Express, RESTful APIs" },
    { icon: Database, title: "Database", desc: "Firebase, Firestore, MongoDB" },
  ];

  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 uppercase tracking-tighter">
              Solving Challenges <br />
              <span className="text-purple">With Code & Data.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              As a Junior Full Stack Web Developer, I am passionate about creating efficient and scalable solutions. My journey in tech is driven by a curiosity to understand how things work and a desire to build tools that make a difference.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              I focus on the MERN stack and Firebase, ensuring that every application I build is not only functional but also provides a seamless user experience across all devices.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {skills.map((skill, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <skill.icon className="text-purple mb-4" size={24} />
                  <h4 className="font-bold text-navy mb-1">{skill.title}</h4>
                  <p className="text-gray-400 text-xs">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-navy p-12 rounded-[2.5rem] text-white shadow-2xl">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Professional Summary</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-4 shrink-0"></div>
                  <p className="text-gray-300 text-sm leading-relaxed">Expertise in building responsive frontends with React and Tailwind CSS.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-4 shrink-0"></div>
                  <p className="text-gray-300 text-sm leading-relaxed">Proficient in developing scalable backends using Node.js and Express.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-4 shrink-0"></div>
                  <p className="text-gray-300 text-sm leading-relaxed">Experience with Firebase for real-time databases and authentication.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-4 shrink-0"></div>
                  <p className="text-gray-300 text-sm leading-relaxed">Committed to writing clean, maintainable, and well-documented code.</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-accent rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projectList = [
    {
      title: "E-commerce Dashboard",
      image: "https://picsum.photos/seed/ecommerce/800/500",
      stack: "React & Node.js",
      description: "A comprehensive admin panel for managing products, orders, and customer data."
    },
    {
      title: "Real-time Chat App",
      image: "https://picsum.photos/seed/chat/800/500",
      stack: "Firebase Auth & Firestore",
      description: "Secure messaging platform with instant updates and user presence tracking."
    },
    {
      title: "Task Management System",
      image: "https://picsum.photos/seed/tasks/800/500",
      stack: "Tailwind CSS & Node.js",
      description: "Collaborative tool for teams to organize, track, and complete projects efficiently."
    }
  ];

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase tracking-tighter">Project Highlights</h2>
          <div className="h-2 w-24 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <span className="text-[10px] font-black text-navy uppercase tracking-widest">{project.stack}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-navy mb-3 uppercase tracking-tight group-hover:text-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex items-center text-navy font-bold text-xs uppercase tracking-widest group-hover:text-accent transition-colors">
                  View Project <ExternalLink size={14} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "odunyemitemitayo@gmail.com",
      link: "mailto:odunyemitemitayo@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 8137450852",
      link: "tel:+2348137450852"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "odunyemi-temitayo-921646211",
      link: "https://www.linkedin.com/in/odunyemi-temitayo-921646211"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-navy mb-8 leading-tight uppercase tracking-tighter">
              Let's Build <br />
              <span className="text-purple">Something Great.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed max-w-lg">
              I'm currently available for new projects and opportunities. If you have an idea or a project that needs a professional touch, feel free to reach out.
            </p>
            
            <div className="space-y-8">
              {contactInfo.map((item, i) => (
                <a 
                  key={i}
                  href={item.link}
                  target={item.label === "LinkedIn" ? "_blank" : undefined}
                  rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="flex items-center group"
                >
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-navy group-hover:bg-purple group-hover:text-white transition-all duration-300 shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <div className="ml-6">
                    <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-navy font-bold text-lg group-hover:text-purple transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <h3 className="text-3xl font-black mb-8 uppercase tracking-tight">Quick Message</h3>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Your Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full bg-accent text-white py-4 rounded-lg font-black uppercase tracking-widest hover:bg-opacity-90 transition-all flex items-center justify-center">
                Send Message <ArrowRight size={18} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-32 pb-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="text-2xl font-black text-navy tracking-tighter uppercase mb-8 md:mb-0">
            ODUNYEMI MOSHOOD TEMITAYO
          </div>
          
          <div className="flex space-x-8">
            <a href="https://www.linkedin.com/in/odunyemi-temitayo-921646211" target="_blank" rel="noopener noreferrer" className="text-navy/40 hover:text-purple transition-all hover:-translate-y-1">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-navy/40 hover:text-purple transition-all hover:-translate-y-1">
              <Github size={28} />
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-gray-100 mb-10"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs font-black uppercase tracking-widest">
          <p>© 2026 ODUNYEMI MOSHOOD TEMITAYO. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="mailto:odunyemitemitayo@gmail.com" className="hover:text-navy transition-colors">odunyemitemitayo@gmail.com</a>
            <a href="tel:+2348137450852" className="hover:text-navy transition-colors">+234 8137450852</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
