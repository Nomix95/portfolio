'use client';

import { portfolioData } from '@/lib/data';
import { GitBranch, Mail, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const floatingVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
    },
  },
};

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
          >
            <motion.div className="space-y-3" variants={itemVariants}>
              <motion.div
                className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200 backdrop-blur-sm"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
              >
                <motion.span className="inline-flex items-center gap-2">
                  <Sparkles size={14} />
                  {portfolioData.subtitle}
                </motion.span>
              </motion.div>
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600"
                variants={itemVariants}
              >
                {portfolioData.name.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : 'hidden'}
                    transition={{ delay: 0.3 + i * 0.03 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p className="text-xl text-gray-600" variants={itemVariants}>
                {portfolioData.title}
              </motion.p>
            </motion.div>

            <motion.p className="text-lg text-gray-700 leading-relaxed max-w-xl" variants={itemVariants}>
              {portfolioData.tagline}
            </motion.p>

            <motion.p className="text-sm text-gray-600 font-medium" variants={itemVariants}>
              ✨ {portfolioData.availability}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-4 pt-4" variants={itemVariants}>
              <motion.a
                href={`mailto:${portfolioData.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-lg group"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Get in Touch
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </motion.a>
              <motion.a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-500 hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GitBranch size={20} />
                GitHub
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div className="space-y-2 pt-4" variants={containerVariants}>
              {[
                { icon: '📍', text: portfolioData.location },
                { icon: '📱', text: portfolioData.phone },
                { icon: '✉️', text: portfolioData.email },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 text-gray-700 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xl group-hover:scale-125 transition-transform">{item.icon}</span>
                  <span className="group-hover:text-blue-600 transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Card */}
          <motion.div className="relative" initial={{ opacity: 0, x: 50 }} animate={isLoaded ? { opacity: 1, x: 0 } : 'hidden'} transition={{ duration: 0.8, delay: 0.3 }}>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-3xl opacity-20 -z-10" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} />
            <motion.div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 backdrop-blur-sm bg-opacity-95 hover:shadow-3xl transition-shadow" whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 300 }}>
              <motion.div className="space-y-6">
                <motion.div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto shadow-lg" animate={{ boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0.7)', '0 0 0 20px rgba(59, 130, 246, 0)'] }} transition={{ duration: 2, repeat: Infinity }} whileHover={{ scale: 1.1 }}>
                  <span className="text-4xl font-bold text-white">NA</span>
                </motion.div>
                <motion.div className="text-center space-y-3" variants={containerVariants}>
                  <motion.h2 className="text-2xl font-bold text-gray-900" variants={itemVariants}>{portfolioData.name}</motion.h2>
                  <motion.p className="text-blue-600 font-semibold" variants={itemVariants}>{portfolioData.title}</motion.p>
                </motion.div>
                <motion.div className="space-y-4" variants={containerVariants}>
                  <motion.div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100 hover:border-blue-300 transition-colors" variants={itemVariants} whileHover={{ x: 5 }}>
                    <p className="text-sm text-gray-600"><strong className="text-blue-600">Status:</strong> 6th Semester BSCS Student at UET Gujranwala</p>
                    <p className="text-sm text-gray-600 mt-2"><strong className="text-blue-600">CGPA:</strong> 3.49 / 4.00</p>
                  </motion.div>
                  <motion.div className="flex justify-center gap-4" variants={containerVariants}>
                    <motion.a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-lg transition-all hover:bg-blue-100 hover:text-blue-600" title="GitHub" variants={itemVariants} whileHover={{ scale: 1.15, rotate: 10 }} whileTap={{ scale: 0.9 }}>
                      <GitBranch size={20} />
                    </motion.a>
                    <motion.a href={`mailto:${portfolioData.email}`} className="p-3 bg-gray-100 rounded-lg transition-all hover:bg-blue-100 hover:text-blue-600" title="Email" variants={itemVariants} whileHover={{ scale: 1.15, rotate: 10 }} whileTap={{ scale: 0.9 }}>
                      <Mail size={20} />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
