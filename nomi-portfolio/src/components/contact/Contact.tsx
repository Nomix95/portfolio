'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} id="contact" className="py-32 px-8 bg-background flex justify-center">
      <div 
        ref={cardRef}
        className="card-dark w-full max-w-5xl text-center relative overflow-hidden flex flex-col items-center"
      >
        <span className="px-4 py-1.5 rounded-full bg-[#222222] text-xs font-semibold tracking-widest text-gray-300 mb-8 border border-[#333333] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Available for work
        </span>

        <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
          Have an idea?<br/>
          <span className="text-gray-500">Let&apos;s build it.</span>
        </h2>

        <p className="text-gray-400 max-w-2xl text-lg mb-12">
          Whether you&apos;re starting from scratch or scaling an existing product, I&apos;m here to help turn your vision into a polished, production-ready reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a 
            href="https://wa.me/923416566535" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-white text-[#111111] font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            Start a Project &rarr;
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-4 rounded-xl bg-transparent text-white font-bold border border-white/20 hover:border-white transition-colors flex items-center justify-center gap-2"
          >
            View LinkedIn
          </a>
        </div>

        <div className="w-full h-px bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 w-full">
          <div>
            <h4 className="text-3xl font-heading font-black text-white mb-1">3+</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Years Building</p>
          </div>
          <div>
            <h4 className="text-3xl font-heading font-black text-white mb-1">20+</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Projects Shipped</p>
          </div>
          <div>
            <h4 className="text-3xl font-heading font-black text-white mb-1">100%</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
