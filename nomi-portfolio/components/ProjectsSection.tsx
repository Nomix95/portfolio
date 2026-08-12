'use client';

import { portfolioData } from '@/lib/data';
import { GitBranch, ExternalLink, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ProjectsSection() {
  const featuredProjects = portfolioData.projects.filter(p => p.featured);
  const otherProjects = portfolioData.projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Notable Projects</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            A selection of production-ready applications spanning AI/ML, full-stack web development, WordPress, and systems programming.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="space-y-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 transition-all"
              variants={itemVariants}
              whileHover={{
                boxShadow: '0 30px 60px rgba(59, 130, 246, 0.2)',
                y: -5,
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

              <div className="p-8 lg:p-10 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>
                      <motion.div
                        className="flex gap-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                      >
                        {project.github !== '#' && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-400 transition-colors"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <GitBranch size={20} className="text-gray-700" />
                          </motion.a>
                        )}
                        {project.demo !== '#' && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-400 transition-colors"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink size={20} className="text-gray-700" />
                          </motion.a>
                        )}
                      </motion.div>
                    </div>

                    <motion.ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          className="flex gap-3 text-gray-700"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + idx * 0.05 }}
                        >
                          <motion.span className="text-blue-500 mt-1 flex-shrink-0" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}>•</motion.span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag, idx) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                          whileHover={{ scale: 1.1 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + idx * 0.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-400 transition-all backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{ boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)', y: -5 }}
                >
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.name}</h4>
                      <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                    </div>
                    <div className="flex gap-2">
                      {project.github !== '#' && (
                        <motion.a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-100 rounded hover:bg-blue-100 transition-colors" whileHover={{ scale: 1.2 }}>
                          <GitBranch size={16} className="text-gray-700" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <motion.span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium" whileHover={{ scale: 1.05 }}>{tag}</motion.span>
                    ))}
                    {project.tags.length > 3 && <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">+{project.tags.length - 3}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
