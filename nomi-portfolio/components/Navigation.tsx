'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { portfolioData } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-md'
          : 'bg-white/50 backdrop-blur-md border-b border-gray-200/50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold">NA</span>
              </motion.div>
              <span className="hidden sm:inline text-lg font-semibold">Nouman Arif</span>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <motion.div className="hidden md:flex items-center gap-6" variants={containerVariants} initial="hidden" animate="visible">
            {navLinks.map((link, idx) => (
              <motion.a key={link.href} href={link.href} className="text-sm text-gray-700 hover:text-blue-600 transition-colors" variants={itemVariants}>
                {link.label}
              </motion.a>
            ))}
            <a href={portfolioData.github} target="_blank" rel="noreferrer" className="ml-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:brightness-110 transition">Resume</a>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} aria-label="Open menu" className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="md:hidden fixed inset-0 bg-black/40 z-50">
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring' }} className="absolute right-0 top-0 w-3/4 max-w-sm h-full bg-white p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold">Menu</span>
                <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
                  <X size={18} />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-800 font-medium py-2">{link.label}</a>
                ))}
                <a href={portfolioData.github} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">Resume</a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
