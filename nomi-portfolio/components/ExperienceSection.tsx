'use client';

import { portfolioData } from '@/lib/data';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ y: [-50, 50, -50] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Professional Experience</h2>
          </div>
          <p className="text-lg text-gray-600">
            Hands-on experience across web development, design, content creation, and recruitment operations.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {portfolioData.experience.map((job, index) => (
            <motion.div key={index} className="relative" variants={itemVariants}>
              {/* Timeline dot and line */}
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    animate={{ boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0.7)', '0 0 0 15px rgba(59, 130, 246, 0)'] }}
                    transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
                  />
                  {index !== portfolioData.experience.length - 1 && (
                    <motion.div
                      className="w-1 h-20 bg-gradient-to-b from-blue-200 to-transparent mt-4"
                      initial={{ height: 0 }}
                      whileInView={{ height: 80 }}
                      transition={{ delay: 0.2 }}
                    />
                  )}
                </div>

                {/* Content */}
                <motion.div
                  className="pb-8 flex-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <motion.div
                    className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-6 border border-gray-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-lg group"
                    whileHover={{
                      y: -5,
                      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                      <div>
                        <motion.h3
                          className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                        >
                          {job.role}
                        </motion.h3>
                        <motion.p className="text-blue-600 font-semibold mt-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                          {job.company} • {job.location}
                        </motion.p>
                      </div>
                      <motion.span
                        className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full whitespace-nowrap font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {job.period}
                      </motion.span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {job.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          className="flex gap-3 text-gray-700 group/item cursor-default"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + idx * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.span
                            className="text-blue-500 mt-1 flex-shrink-0 group-hover/item:scale-125"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                          >
                            →
                          </motion.span>
                          <span className="group-hover/item:text-blue-600 transition-colors">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-purple-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-lg group"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
                }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <motion.h3
                      className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      {edu.degree}
                    </motion.h3>
                    <motion.p className="text-blue-600 font-semibold mt-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                      {edu.institution}
                    </motion.p>
                  </div>
                  <motion.div
                    className="text-right"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                  >
                    <p className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block whitespace-nowrap font-medium">
                      {edu.period}
                    </p>
                  </motion.div>
                </div>
                <motion.p
                  className="text-gray-700 mt-4 group-hover:text-blue-600 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  {edu.details}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
