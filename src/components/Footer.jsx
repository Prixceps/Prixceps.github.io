import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/10 bg-black relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter mb-8">
              Prince.
            </h2>
            <p className="text-gray-400 text-xl max-w-md font-light">
              Building intelligent solutions that leave a lasting impression.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-8"
          >
            <div className="flex flex-col gap-4">
              <span className="text-sm text-gray-500 uppercase tracking-widest">Socials</span>
              <a href="https://www.linkedin.com/in/prixceps/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 group">
                LinkedIn <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://github.com/Prixceps" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 group">
                GitHub <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://www.instagram.com/prixceps_._/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 group">
                Instagram <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Prince Raj. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed & Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
