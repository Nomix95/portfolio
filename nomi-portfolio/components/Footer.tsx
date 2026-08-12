'use client';

import { portfolioData } from '@/lib/data';
import { GitBranch, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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

  const contactMethods = [
    { icon: Mail, label: 'Email', value: portfolioData.email, href: `mailto:${portfolioData.email}` },
    { icon: Phone, label: 'Phone', value: portfolioData.phone, href: `tel:${portfolioData.phone}` },
    { icon: MapPin, label: 'Location', value: portfolioData.location },
    { icon: GitBranch, label: 'GitHub', value: 'Nomix95', href: portfolioData.github },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Contact Section */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl font-bold mb-4" variants={itemVariants}>Get In Touch</motion.h2>
          <motion.p className="text-lg text-slate-300 max-w-2xl mb-8" variants={itemVariants}>
            I'm available for freelance, contract, and full-time opportunities. Let's build something great together.
          </motion.p>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
            {contactMethods.map((c, idx) => (
              <motion.a key={c.label} href={c.href ?? '#'} className="bg-white/5 rounded-lg p-6 flex items-start gap-4 hover:bg-white/8 transition" variants={itemVariants} target={c.href ? '_blank' : undefined} rel={c.href ? 'noreferrer' : undefined}>
                <div className="p-3 bg-white/10 rounded-lg">
                  <c.icon size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-300 font-medium">{c.label}</div>
                  <div className="text-white font-semibold">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex items-center justify-between mt-12">
          <div className="text-sm text-slate-400">© {new Date().getFullYear()} Nouman Arif. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <button onClick={scrollToTop} className="inline-flex items-center gap-2 bg-white/5 px-3 py-2 rounded hover:bg-white/8 transition">
              <ArrowUp size={16} />
              <span className="text-sm">Back to top</span>
            </button>
            <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-sm text-slate-300 hover:text-white transition">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
