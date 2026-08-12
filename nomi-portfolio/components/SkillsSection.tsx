'use client';

import { portfolioData } from '@/lib/data';
import { motion } from 'framer-motion';
import { Zap, Code, Palette, User } from 'lucide-react';

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
    transition: { duration: 0.6 },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-0 left-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Code className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Technical Skills</h2>
          </div>
          <p className="text-lg text-gray-600">Comprehensive expertise across modern tech stack and emerging technologies.</p>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {portfolioData.skills.technical.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-lg group cursor-default"
              variants={itemVariants}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((s) => (
                  <span key={s} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills + Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="space-y-4">
            <motion.h3 className="text-2xl font-bold text-gray-900" variants={itemVariants}>Design & Tools</motion.h3>
            <motion.div className="flex flex-wrap gap-2" variants={itemVariants}>
              {portfolioData.skills.design.map((d) => (
                <span key={d} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">{d}</span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="space-y-4">
            <motion.h3 className="text-2xl font-bold text-gray-900" variants={itemVariants}>Soft Skills</motion.h3>
            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
              {portfolioData.skills.soft.map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <User className="text-blue-600" size={18} />
                  <div className="text-gray-800 font-medium">{s}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
