// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';  // ← YEH IMPORT KARO

// Icons import (agar alag file mein hain toh)
// Agar nahi hain toh ye bhi add karo
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

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

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  
  // ✅ YEH ADD KARO - formData state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const formDataToSend = new FormData(e.target);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/qureshimohmmadsohel@gmail.com', {
        method: 'POST',
        body: formDataToSend
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('✅ Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); // Reset form
        e.target.reset();
      } else {
        setSubmitStatus('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('❌ Network error. Please try again.');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
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
                  <span className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-500/20 transition-all">
                    <PhoneIcon />
                  </span>
                  <span className="text-sm sm:text-base">+91 6353849512</span>
                </a>
                <a href="mailto:qureshimohmmadsohel@gmail.com" className="flex items-center space-x-3 sm:space-x-4 text-gray-300 hover:text-blue-400 transition-colors group">
                  <span className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-500/20 transition-all">
                    <EmailIcon />
                  </span>
                  <span className="text-sm sm:text-base">qureshimohmmadsohel@gmail.com</span>
                </a>
                <div className="flex items-center space-x-3 sm:space-x-4 text-gray-300">
                  <span className="p-2 bg-gray-800 rounded-lg">
                    <LocationIcon />
                  </span>
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

          {/* FORM */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 sm:p-8 space-y-5 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">📝 Send Message</h3>
            
            {/* Status Message */}
            {submitStatus && (
              <div className={`p-3 rounded-lg text-center text-sm ${
                submitStatus.includes('✅') 
                  ? 'bg-green-500/20 text-green-400 border border-green-500' 
                  : 'bg-red-500/20 text-red-400 border border-red-500'
              }`}>
                {submitStatus}
              </div>
            )}
            
            {/* Hidden fields */}
            <input type="hidden" name="_subject" value="New Portfolio Message!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            {/* Honeypot for spam */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white text-sm" 
                placeholder="Your name" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white text-sm" 
                placeholder="your@email.com" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                name="message"
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none text-sm" 
                placeholder="Your message..." 
              />
            </div>
            
            <motion.button 
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm sm:text-base disabled:opacity-50"
            >
              {isSubmitting ? 'Sending... ✉️' : 'Send Message ✉️'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;