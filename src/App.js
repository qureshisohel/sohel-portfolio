import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ==================== ICONS ====================
import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaAndroid
} from "react-icons/fa";

import {
  SiCplusplus,
  SiMysql,
  SiTailwindcss,
  SiFlask,
  SiDjango,
  SiTensorflow,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiScikitlearn,
  SiJupyter,
  SiGooglecolab,
  SiFlutter
} from "react-icons/si";

// ==================== SCROLL PROGRESS ====================
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60]">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

// ==================== SOCIAL ICONS (SVG) ====================
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

// ==================== NAVBAR ====================
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      let current = 'home';
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      });
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleNavClick = useCallback((sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const navItems = [
    { name: '🏠 Home', id: 'home' },
    { name: '👤 About', id: 'about' },
    { name: '💼 Experience', id: 'experience' },
    { name: '🛠️ Skills', id: 'skills' },
    { name: '🚀 Projects', id: 'projects' },
    { name: '🎓 Education', id: 'education' },
    { name: '📬 Contact', id: 'contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-lg shadow-2xl shadow-purple-500/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              QMS
            </motion.div>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-white bg-blue-500/20 border border-blue-500/50 shadow-lg shadow-blue-500/10' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50 border border-transparent'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/80 border border-gray-700 hover:border-blue-500/50 transition-all z-[70]"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="absolute top-0 left-0 w-full h-0.5 bg-white rounded-full origin-center"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                  className="absolute top-1.5 left-0 w-full h-0.5 bg-white rounded-full"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full origin-center"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-xl border-l border-gray-800 z-50 md:hidden overflow-y-auto shadow-2xl shadow-purple-500/20"
            >
              <div className="p-6 pt-20">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white text-xl hover:bg-gray-700 transition-colors"
                >
                  ✕
                </button>

                <div className="text-center mb-8">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    QMS
                  </div>
                  <p className="text-gray-400 text-sm">Navigate to section</p>
                </div>

                <div className="space-y-2">
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-4 rounded-xl text-left transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-blue-500/20 border border-blue-500/50 text-white shadow-lg shadow-blue-500/10'
                          : 'text-gray-300 hover:bg-gray-800/50 hover:text-white border border-transparent'
                      }`}
                    >
                      <span className="text-xl">{item.name.split(' ')[0]}</span>
                      <span className="font-medium">{item.name.split(' ').slice(1).join(' ')}</span>
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="mobileActive"
                          className="ml-auto w-2 h-2 bg-blue-400 rounded-full"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800">
                  <p className="text-gray-400 text-sm mb-4 text-center">Connect with me</p>
                  <div className="flex justify-center space-x-3">
                    {[
                      { icon: <FacebookIcon />, link: "https://www.facebook.com/qureshi.sohel.18/", color: "hover:text-blue-400" },
                      { icon: <InstagramIcon />, link: "https://instagram.com/qureshisohel_", color: "hover:text-pink-400" },
                      { icon: <LinkedInIcon />, link: "https://linkedin.com/in/sohel-qureshi-9536a4223", color: "hover:text-blue-300" },
                      { icon: <GitHubIcon />, link: "https://github.com/qureshisohel", color: "hover:text-white" },
                      { icon: <WhatsAppIcon />, link: "https://wa.me/916353849512", color: "hover:text-green-400" },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-2 text-gray-400 transition-colors ${social.color}`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// ==================== HERO SECTION (WITH DOWNLOAD BUTTON) ====================
// ==================== HERO SECTION (FIXED) ====================
const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = [
      "AI/ML Developer",
      "Full Stack Developer",
      "Computer Vision Enthusiast",
      "Software Engineer",
      "Web Developer"
    ];
    
    const current = roles[currentRole];
    let timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(isDeleting 
          ? current.slice(0, displayText.length - 1)
          : current.slice(0, displayText.length + 1)
        );
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
            
            <div className="relative">
              <img 
                src="/sohel_portfo.png"
                alt="Qureshi Mohammad Sohel"
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500/50 shadow-2xl shadow-blue-500/30 relative z-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-blue-500/50 shadow-2xl items-center justify-center text-4xl font-bold text-white hidden">
                QMS
              </div>
              
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-gray-950 z-20 animate-pulse" />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 px-2">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              QURESHI MOHAMMAD SOHEL
            </span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 h-10 flex items-center justify-center"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
            {displayText}
          </span>
          <span className="animate-pulse text-blue-400 ml-1">|</span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm sm:text-base md:text-lg px-4"
        >
          Passionate developer specializing in Artificial Intelligence, Machine Learning, Computer Vision, and modern web technologies.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center space-x-3 sm:space-x-4 mb-8"
        >
          {[
            { icon: <FacebookIcon />, link: "https://www.facebook.com/qureshi.sohel.18/", color: "hover:bg-blue-600" },
            { icon: <InstagramIcon />, link: "https://instagram.com/qureshisohel_", color: "hover:bg-pink-600" },
            { icon: <LinkedInIcon />, link: "https://linkedin.com/in/sohel-qureshi-9536a4223", color: "hover:bg-blue-700" },
            { icon: <GitHubIcon />, link: "https://github.com/qureshisohel", color: "hover:bg-gray-600" },
            { icon: <WhatsAppIcon />, link: "https://wa.me/916353849512", color: "hover:bg-green-600" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2.5 sm:p-3 bg-gray-800/80 border border-gray-700 rounded-full text-gray-400 transition-all duration-300 ${social.color} hover:text-white hover:shadow-lg`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            href="#projects"
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm sm:text-base"
          >
            🚀 View Projects
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            href="/sohel_cv.pdf"
            download="Qureshi_Mohammad_Sohel_Resume.pdf"
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-green-500/25 transition-all text-sm sm:text-base flex items-center gap-2"
          >
            📄 Download Resume
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            href="#contact"
            className="px-6 sm:px-8 py-3 border border-gray-600 rounded-full font-semibold text-white hover:bg-gray-800 transition-all text-sm sm:text-base"
          >
            💬 Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// ==================== ABOUT SECTION (WITH DOWNLOAD BUTTON) ====================
const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">👨‍💻 Who I Am</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I'm an MCA student at Gujarat University with a strong passion for Artificial Intelligence, 
                Deep Learning, Computer Vision, and modern web development. Currently working as a Software Engineer.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">🎯 What I Do</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I specialize in creating intelligent systems using machine learning and deep learning techniques, 
                while also building full-stack web applications with modern technologies.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">⚡ Quick Facts</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                '🎓 MCA Student at Gujarat University',
                '💼 Software Engineer at OrcaMinds.in',
                '🤖 AI & ML Enthusiast',
                '👁️ Computer Vision Developer',
                '💻 Full Stack Web Developer',
                '📱 Mobile App Developer',
                '🔬 Problem Solver'
              ].map((fact, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }} 
                  className="flex items-center space-x-3 text-gray-300 text-sm sm:text-base"
                >
                  <span className="text-blue-400">▹</span><span>{fact}</span>
                </motion.li>
              ))}
            </ul>
            
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================== EXPERIENCE SECTION ====================
const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 sm:p-8 border-l-4 border-blue-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full -ml-12 -mb-12" />
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Software Engineer</h3>
                <p className="text-blue-400 text-base sm:text-lg font-semibold">Web Development</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/20 text-green-400 rounded-full text-xs sm:text-sm font-semibold border border-green-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Feb 2026 - Present
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 mb-5">
              <span className="text-2xl">🏢</span>
              <motion.a 
                href="https://orcaminds.in" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="text-gray-300 hover:text-blue-400 transition-colors text-base sm:text-lg font-medium flex items-center gap-1"
              >
                OrcaMinds.in
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            </div>
            
            <div className="mb-5">
              <h4 className="text-white font-semibold mb-3 text-sm sm:text-base flex items-center gap-2">
                <span>⚡</span> Technologies I Work With
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "PHP", color: "from-purple-500 to-pink-500" },
                  { name: "JavaScript", color: "from-yellow-500 to-orange-500" },
                  { name: "HTML5", color: "from-orange-500 to-red-500" },
                  { name: "CSS3", color: "from-blue-500 to-cyan-500" },
                  { name: "Bootstrap", color: "from-purple-500 to-indigo-500" },
                  { name: "React", color: "from-cyan-500 to-blue-500" },
                ].map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-sm text-gray-300 cursor-pointer hover:border-blue-500 transition-all"
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="mb-5">
              <h4 className="text-white font-semibold mb-3 text-sm sm:text-base flex items-center gap-2">
                <span>🌐</span> Live Projects I've Built
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: "Shah Valves", url: "https://shahvalves.com/", icon: "🔧" },
                  { name: "Tifa Valves", url: "https://tifavalves.com/", icon: "⚙️" },
                  { name: "Shambhu Pest Solution", url: "https://shambhupestsolution.com/index.html", icon: "🐜" },
                ].map((project, i) => (
                  <motion.a
                    key={i}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, x: 5 }}
                    className="flex items-center gap-3 p-3 bg-gray-900/70 rounded-xl border border-gray-700 hover:border-blue-500 transition-all group"
                  >
                    <span className="text-xl">{project.icon}</span>
                    <span className="text-gray-300 text-sm group-hover:text-blue-400 transition flex-1">
                      {project.name}
                    </span>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">Live</span>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm sm:text-base flex items-center gap-2">
                <span>📋</span> What I Do
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Developing responsive websites using PHP, HTML, CSS, JavaScript",
                  "Customizing Bootstrap templates to match client requirements",
                  "Building interactive UI components with modern web technologies",
                  "Managing and optimizing website performance",
                  "Collaborating with team on full-stack web projects"
                ].map((resp, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 text-gray-300 text-sm"
                  >
                    <span className="text-blue-400 mt-1">▹</span>
                    <span>{resp}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-700 flex flex-wrap gap-4 justify-around">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">3+</p>
                <p className="text-xs text-gray-500">Live Websites</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">10+</p>
                <p className="text-xs text-gray-500">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">PHP</p>
                <p className="text-xs text-gray-500">Core Technology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================== SKILLS SECTION ====================
const Skills = () => {
  const categories = [
    {
      title: "Programming",
      icon: "💻",
      skills: [
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
        { name: "Java", icon: <FaJava className="text-red-400" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
      ],
    },
    {
      title: "Frontend",
      icon: "🌐",
      skills: [
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-400" /> },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Flask", icon: <SiFlask className="text-white" /> },
        { name: "Django", icon: <SiDjango className="text-green-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      ],
    },
    {
      title: "AI / ML",
      icon: "🤖",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
        { name: "Keras", icon: <SiKeras className="text-red-500" /> },
        { name: "OpenCV", icon: <SiOpencv className="text-purple-400" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-300" /> },
        { name: "Pandas", icon: <SiPandas className="text-white" /> },
        { name: "NumPy", icon: <SiNumpy className="text-blue-300" /> },
      ],
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: [
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "Jupyter", icon: <SiJupyter className="text-orange-400" /> },
        { name: "Colab", icon: <SiGooglecolab className="text-yellow-400" /> },
      ],
    },
    {
      title: "Mobile",
      icon: "📱",
      skills: [
        { name: "Android", icon: <FaAndroid className="text-green-400" /> },
        { name: "Flutter", icon: <SiFlutter className="text-cyan-400" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-14"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(59,130,246,0.4)",
              }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl sm:rounded-3xl p-5 sm:p-6"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl">{cat.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {cat.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                    }}
                    className="flex items-center gap-2 sm:gap-3 bg-gray-900/70 border border-gray-700 px-3 sm:px-4 py-2 sm:py-3 rounded-xl cursor-pointer hover:border-blue-500 transition-all"
                  >
                    <div className="text-xl sm:text-2xl">
                      {skill.icon}
                    </div>
                    <span className="text-gray-200 text-xs sm:text-sm font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== PROJECTS SECTION ====================
const Projects = () => {
  const projects = [
    { 
      title: "🏠 California Housing Prediction", 
      tech: "Python, Scikit-learn, Pandas, NumPy", 
      desc: "Built ML regression model to predict California housing prices using data preprocessing, EDA, visualization, and Linear Regression.", 
      github: "https://github.com/qureshisohel/california-housing-prediction", 
      gradient: "from-blue-500 to-cyan-500" 
    },
    { 
      title: "📊 Sales Forecast Prediction", 
      tech: "Python, Pandas, Matplotlib, XGBoost", 
      desc: "Developed a sales forecasting system using historical sales data and machine learning techniques.", 
      github: "https://github.com/qureshisohel/Sales_Forecast_prediction", 
      gradient: "from-purple-500 to-pink-500" 
    },
    { 
      title: "🏦 Bank Management System", 
      tech: "Java, OOP", 
      desc: "Desktop-based banking application supporting deposit, withdrawal, and account management.", 
      github: "https://github.com/qureshisohel/bank-management-system", 
      gradient: "from-green-500 to-teal-500" 
    },
    { 
      title: "🎓 Student Management System", 
      tech: "Python, MySQL", 
      desc: "CRUD-based student record management system with add, update, search, and delete functionalities.", 
      github: "https://github.com/qureshisohel/student-management-system", 
      gradient: "from-orange-500 to-red-500" 
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }} 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all"
            >
              <div className={`h-2 bg-gradient-to-r ${p.gradient}`} />
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{p.title}</h3>
                <p className="text-blue-400 text-xs sm:text-sm mb-3 sm:mb-4">{p.tech}</p>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">{p.desc}</p>
                {p.github && (
                  <motion.a 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }} 
                    href={p.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-white text-sm sm:text-base"
                  >
                    <GitHubIcon />
                    <span>View on GitHub</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== EDUCATION SECTION ====================
const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Education</span>
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          {[
            { degree: "🎓 MCA", period: "2024 - 2026", college: "Department of Computer Science", uni: "Gujarat University", loc: "Ahmedabad, Gujarat", current: true },
            { degree: "📚 BCA", period: "2020 - 2023", college: "Som-Lalit Institute of Computer Application", uni: "Gujarat University", loc: "Ahmedabad, Gujarat", current: false }
          ].map((edu, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }} 
              whileHover={{ scale: 1.02 }}
              className={`bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-5 sm:p-8 border-l-4 ${edu.current ? 'border-blue-500' : 'border-purple-500'} relative overflow-hidden`}
            >
              {edu.current && (
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold border border-green-500/30">
                    Current
                  </span>
                </div>
              )}
              <span className="text-blue-400 text-xs sm:text-sm font-semibold">{edu.period}</span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2 text-white">{edu.degree}</h3>
              <p className="text-gray-300 mt-1 text-sm sm:text-base">{edu.college}</p>
              <p className="text-gray-400 text-sm sm:text-base">{edu.uni}</p>
              <p className="text-gray-500 text-xs sm:text-sm">{edu.loc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== CONTACT SECTION (WITH DOWNLOAD BUTTON) ====================
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    
    setTimeout(() => {
      window.location.href = `mailto:qureshimohmmadsohel@gmail.com?subject=${subject}&body=${body}`;
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Get In Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">📬 Contact Info</h3>
              <div className="space-y-4 sm:space-y-5">
                <a href="tel:+916353849512" className="flex items-center space-x-3 sm:space-x-4 text-gray-300 hover:text-blue-400 transition-colors group">
                  <span className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-500/20 transition-all"><PhoneIcon /></span>
                  <span className="text-sm sm:text-base">+91 6353849512</span>
                </a>
                <a href="mailto:qureshimohmmadsohel@gmail.com" className="flex items-center space-x-3 sm:space-x-4 text-gray-300 hover:text-blue-400 transition-colors group">
                  <span className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-500/20 transition-all"><EmailIcon /></span>
                  <span className="text-sm sm:text-base">qureshimohmmadsohel@gmail.com</span>
                </a>
                <div className="flex items-center space-x-3 sm:space-x-4 text-gray-300">
                  <span className="p-2 bg-gray-800 rounded-lg"><LocationIcon /></span>
                  <span className="text-sm sm:text-base">Ahmedabad, Gujarat, India</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">🔗 Connect With Me</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  { icon: <FacebookIcon />, link: "https://www.facebook.com/qureshi.sohel.18/", name: "Facebook", color: "hover:bg-blue-600" },
                  { icon: <InstagramIcon />, link: "https://instagram.com/qureshisohel_", name: "Instagram", color: "hover:bg-pink-600" },
                  { icon: <LinkedInIcon />, link: "https://linkedin.com/in/sohel-qureshi-9536a4223", name: "LinkedIn", color: "hover:bg-blue-700" },
                  { icon: <GitHubIcon />, link: "https://github.com/qureshisohel", name: "GitHub", color: "hover:bg-gray-600" },
                  { icon: <WhatsAppIcon />, link: "https://wa.me/916353849512", name: "WhatsApp", color: "hover:bg-green-600" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-800 rounded-lg text-gray-400 transition-all duration-300 ${social.color} hover:text-white text-xs sm:text-sm`}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
              
             
            </div>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 sm:p-8 space-y-5 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">📝 Send Message</h3>
            
            {status === 'success' && (
              <div className="p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-sm">
                ✅ Opening email client...
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white text-sm" 
                placeholder="Your name" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white text-sm" 
                placeholder="your@email.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                rows="4" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none text-sm" 
                placeholder="Your message..." 
              />
            </div>
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm sm:text-base"
            >
              ✉️ Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

// ==================== FOOTER ====================
const Footer = () => (
  <footer className="py-6 sm:py-8 border-t border-gray-800 bg-gray-950">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-gray-400 text-sm">© 2026 Qureshi MohammadSohel. All rights reserved.</p>
        </div>
        <div className="flex space-x-3 sm:space-x-4">
          {[
            { icon: <FacebookIcon />, link: "https://www.facebook.com/qureshi.sohel.18/" },
            { icon: <InstagramIcon />, link: "https://instagram.com/qureshisohel_" },
            { icon: <LinkedInIcon />, link: "https://linkedin.com/in/sohel-qureshi-9536a4223" },
            { icon: <GitHubIcon />, link: "https://github.com/qureshisohel" },
            { icon: <WhatsAppIcon />, link: "https://wa.me/916353849512" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

// ==================== MAIN APP ====================
function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
